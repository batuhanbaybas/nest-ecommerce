-- CreateIndex
CREATE INDEX "Adress_userId_idx" ON "Adress"("userId");

-- CreateIndex
CREATE INDEX "Basket_userId_idx" ON "Basket"("userId");

-- CreateIndex
CREATE INDEX "Basket_productId_idx" ON "Basket"("productId");

-- CreateIndex
CREATE INDEX "Favorite_userId_idx" ON "Favorite"("userId");

-- CreateIndex
CREATE INDEX "Favorite_productId_idx" ON "Favorite"("productId");

-- CreateIndex
CREATE INDEX "Order_userId_idx" ON "Order"("userId");

-- CreateIndex
CREATE INDEX "OrderItem_orderId_idx" ON "OrderItem"("orderId");

-- CreateIndex
CREATE INDEX "OrderItem_productId_idx" ON "OrderItem"("productId");

-- CreateIndex
CREATE INDEX "ShopProduct_shopId_idx" ON "ShopProduct"("shopId");

-- CreateIndex
CREATE INDEX "ShopProduct_productId_idx" ON "ShopProduct"("productId");

-- CreateIndex
CREATE INDEX "User_roleId_idx" ON "User"("roleId");
