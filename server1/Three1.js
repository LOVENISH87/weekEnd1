export const AuthStaff = (permissions) => {

    return (req, resp, next) => {
        // Safely access the role using optional chaining (?.)
        const userRole = req.body?.role;

        if (permissions.includes(userRole)) {
            next();
        } else {
            resp.status(401).json({ message: "Unauthorized: You do not have the required permissions." });
        }
    }
}
