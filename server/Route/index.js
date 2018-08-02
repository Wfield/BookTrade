import express from 'express'
import user from './user'
import book from './book'
import trade from './trade'

const router= express.Router();
router.all('*', user, book, trade);

export default router