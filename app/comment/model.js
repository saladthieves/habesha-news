'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
        message:    {type: String, required: true},
        poster:     {type: Schema.Types.ObjectId, ref: 'User', required: true},
        likes:      [{type: Schema.Types.ObjectId, ref: 'User'}],
        dislikes:   [{type: Schema.Types.ObjectId, ref: 'User'}]
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
);

module.exports = mongoose.model('Comment', commentSchema);