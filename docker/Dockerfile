# Sử dụng hình ảnh base là Odoo 14
FROM odoo:16

# Copy toàn bộ nội dung của project Odoo vào thư mục addons trong container
COPY . /mnt/extra-addons

# Sao chép file cấu hình Odoo vào thư mục /etc/odoo trong container
COPY ../odoo.conf /etc/odoo/odoo.conf

# Expose cổng mặc định của Odoo (nếu cần thiết)
EXPOSE 8069

# Chạy Odoo khi container được khởi động
CMD ["odoo"]

