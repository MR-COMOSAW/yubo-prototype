const express = require('express');
const router = express.Router();
const { getProfiles, getMyProfile } = require('../controllers/profileController');
router.get('/', getProfiles);
router.get('/me', getMyProfile);
module.exports = router;