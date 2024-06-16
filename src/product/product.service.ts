import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = new this.productModel({
      ...createProductDto,
    });

    await newProduct.populate('category');

    try {
      newProduct.save();
    } catch (error) {}
  }

  async findAll() {
    let products = [];
    products = await this.productModel.find().populate('category', 'name');

    return products;
  }

  findOne(id: string) {
    return this.productModel.findById(id).populate('category', '_id name');
  }

  async findByCategory(category: string) {
    const products = await this.productModel
      .find()
      .populate('category', '_id name');

    const filterProducts = products.filter(
      (product) => product.category[0].name === category,
    );
    return filterProducts;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto, {
      new: true,
    });
  }
}
