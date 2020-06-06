const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

Profile = require('../../models/Profile');
User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Get current user profile
// @access  Private

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (errors) {
    console.error(errors.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
