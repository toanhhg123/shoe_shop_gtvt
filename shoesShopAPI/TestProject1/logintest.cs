using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using ShoesSopAPI;
using ShoesSopAPI.Controllers;
using ShoesSopAPI.Data;
using ShoesSopAPI.Repository;
using ShoesSopAPI.Repository.Interface;
using ShoesSopAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestProject1
{
    public class logintest
    {
       
        [Fact]
        public void Login_returnUser()
        {
            Account fakeAccount = new Account()
            {
                Id = 1,
                Name = "theduyet",
                Password = "123456",
                Token = "dfgfdgsfdgreafvd",
                Username = "1341243545"
            };
            //Arrange

            var accc = new Mock<AuthenticationService>();
            accc.SetReturnsDefault(fakeAccount);
            var controller = new AuthenticationController(accc.Object);
            //Act
             var result =  controller.Login("1341243545", "123456");
            //Assert
            result.Equals(fakeAccount) ;
        }
    }
}
