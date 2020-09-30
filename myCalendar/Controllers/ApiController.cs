
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using myCalendar.Models;
using System;

namespace myCalendar.Controllers
{
    public class ApiController : Controller
    {
         public IActionResult Tasks()
        {
            var list = new List<Task>();
            
            var t1 = new Task();
            t1.Id=1;
            t1.Title="First task";
            t1.Notes = "This is a note";
            t1.Important=true;
            t1.Date= DateTime.Now;
            list.Add(t1);

            var t2 = new Task()
            {
                Id=2,
                Title="Second Task",
                Important= false,
                Notes="This is a note"
            };
            list.Add(t2);


            var t3 = new Task()
            {
                Id=3,
                Title="Third Task",
                Important= false,
                Notes="This is a note",
                Date = DateTime.Today.AddDays(1)
            };
            list.Add(t3);


            var t4 = new Task()
            {
                Id=4,
                Title="Forth Task",
                Important= false,
                Notes="This is a note",
                Date = DateTime.Now
            };
            list.Add(t4);

            return Json(list);
        }
    }
}