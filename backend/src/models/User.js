const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide your first name'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Please provide your last name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },
    role: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [8, 'Password must be at least 8 characters long']
    },
    company: {
        name: {
            type: String,
            required: [true, 'Please provide company name'],
            trim: true
        },
        size: {
            type: String,
            required: [true, 'Please provide company size'],
            enum: ['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+']
        },
        industry: {
            type: String,
            required: [true, 'Please provide industry'],
            trim: true
        }
    },
    mainGoal: {
        type: String,
        trim: true
    },
    heardFrom: {
        type: String,
        trim: true
    },
    agreeTerms: {
        type: Boolean,
        required: [true, 'You must agree to the terms and conditions']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Method to check if password matches
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema); 