-- DropForeignKey
ALTER TABLE "Adress" DROP CONSTRAINT "Adress_userId_fkey";

-- DropForeignKey
ALTER TABLE "Basket" DROP CONSTRAINT "Basket_productId_fkey";

-- DropForeignKey
ALTER TABLE "Basket" DROP CONSTRAINT "Basket_userId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_productId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_userId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ShopProduct" DROP CONSTRAINT "ShopProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "ShopProduct" DROP CONSTRAINT "ShopProduct_shopId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- CreateIndex
CREATE INDEX "Product_categoryId_idx" ON "Product"("categoryId");
