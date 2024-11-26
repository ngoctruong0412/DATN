const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const promotionsRoutes = require('./routes/PromotionsRoutes');
const productsRoutes = require('./routes/ProductsRoutes.js');
const PostsRoutes = require('./routes/PostRoutes.js');
const CategoriesRoutes = require('./routes/CategoriesRoutes.js');
const OrdersRoutes = require('./routes/OrderRoutes.js')
const CommentRoutes = require('./routes/CommentRoutes.js')
const EmployeeRoutes = require('./routes/EmployeeRouter.js');
// const AppointmentRoutes = require ('./routes/AppointmentRouter.js')
const userRoutes = require('./routes/UsersRoutes');
const authRoutes = require('./routes/auth');
const loginRoutes = require('./routes/AuthRoutes');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/promotions', promotionsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/posts', PostsRoutes);
app.use('/api/categories',CategoriesRoutes);
app.use('/api/orders', OrdersRoutes);
app.use('/api/comments', CommentRoutes);
app.use('/api', EmployeeRoutes);
// app.use('/api/appointments', AppointmentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/users', authRoutes);
app.use('/api',loginRoutes)
const PORT = 5000;
app.listen(PORT, () => console.log(`Server đang chạy trên cổng ${PORT}`));
