using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Moq;
using ShoesSopAPI.Controllers;
using ShoesSopAPI.Models;
using ShoesSopAPI.Repository.Interface;
using ShoesSopAPI.Services;

namespace TestProject1
{
    public class ProductTest
    {
        private readonly SanPham _fakeProduct = new SanPham();
        private readonly IEnumerable<SanPham> _listPrd;
        public ProductTest()
        {
            _fakeProduct = new SanPham()
            {
                Id = 1,
                Anh = "",
                Gia = 523,
                Loai = 1,
                TenSanPham = "FAKE PRODUCT"
            };
            _listPrd = new List<SanPham>() { _fakeProduct };
        }

        [Fact]
        public void GetListProductBySale_ReturnListProduct()
        {

            //Arrange

            var repo = new Mock<IProductRepository>();
            repo.Setup(p => p.GetListProductBySale()).ReturnsAsync(_listPrd);
            ProductService productService = new ProductService(null, repo.Object);
            ProductController controller = new ProductController(productService);

            //Act

            var result = controller.GetSanPham();

            //Assert
            Assert.NotNull(result);
            Assert.Equal(result.Result, _listPrd);
        }
        [Fact]
        public async void PostProduct_ReturnTrue()
        {
            //Arrange

            var repo = new Mock<IProductRepository>();
            repo.Setup(p => p.PostProduct(_fakeProduct)).ReturnsAsync(_fakeProduct);
            ProductService productService = new ProductService(null, repo.Object);
            ProductController controller = new ProductController(productService);

            //Act

            var result = await controller.PostSanPham(_fakeProduct);
            var resultcode = (result.Result as OkObjectResult).StatusCode;
            //Assert
            resultcode.Should().Be(200);

              }

        [Fact]
        public async void GetSanPhamById_ReturnSanPham()
        {
            //Arrange

            var repo = new Mock<IProductRepository>();
            repo.Setup(p => p.GetProductById(1)).ReturnsAsync(_fakeProduct);
            ProductService productService = new ProductService(null, repo.Object);
            ProductController controller = new ProductController(productService);

            //Act

            var result = await controller.PostSanPham(_fakeProduct);
            var resultcode = (result.Result as OkObjectResult).StatusCode;
            //Assert
            resultcode.Should().Be(200);

        }
    }

}