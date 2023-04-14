import { Router } from "express";
const router = Router();



router.get("/auth/logout", (req, res) => {
    res.send();
});

// login method is POST even though you're not creating a new resource, 
// goes against the rest convention, it is an exception because 
//the data needs to be in the body where it's secure
router.post("/auth/login", (req, res) => {
    res.send();
});

export default router;