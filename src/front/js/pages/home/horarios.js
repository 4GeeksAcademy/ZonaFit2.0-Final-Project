
import React from "react";
import "../../pages/home/style/home.css"


export const Horarios = () => {


    return (
<div className="schedule" id="sch">
  <h2>Nuestras horas de asesoria</h2>
  <h3>
    Workout Timetable
  </h3>
  <div className="container">

    <table className="table  table-responsive schedule-table" data-aos="fade-up" data-aos-delay="300">

      <thead className="">
          <th className="b"><i className="fa fa-calendar"></i></th>
          <th>Lun</th>
          <th>Mar</th>
          <th>Mier</th>
          <th>Jue</th>
          <th>Vier</th>
          <th>Sab</th>
      </thead>

      <tbody>
          <tr>
             <td className="b"><small>7:00 am</small></td>
             <td>
                 <strong>Cardio</strong> <br/>
                 <span>7:00 am - 9:00 am</span>
             </td>
             <td>
                 <strong>Power Fitness</strong> <br/>
                 <span>7:00 am - 9:00 am</span>
             </td>
             <td></td>
             <td></td>
             <td>
                 <strong>Yoga Section</strong> <br/>
                 <span>7:00 am - 9:00 am</span>
             </td>
          </tr>

          <tr>
             <td className="b"><small>9:00 am</small></td>
             <td></td>
             <td></td>
             <td>
                 <strong>Boxing</strong> <br/>
                 <span>8:00 am - 9:00 am</span>
             </td>
             <td>
                 <strong>Areobic</strong> <br/>
                 <span>8:00 am - 9:00 am</span>
             </td>
             <td></td>
             <td>
                 <strong>Cardio</strong> <br/>
                 <span>8:00 am - 9:00 am</span>
             </td>
          </tr>

          <tr>
             <td className="b"><small>11:00 am</small></td>
             <td></td>
             <td>
                 <strong>Boxing</strong> <br/>
                 <span>11:00 am - 2:00 pm</span>
             </td>
             <td>
                 <strong>Areobic</strong> <br/>
                 <span>11:30 am - 3:30 pm</span>
             </td>
             <td></td>
             <td>
                 <strong>Body work</strong> <br/>
                 <span>11:50 am - 5:20 pm</span>
             </td>
          </tr>

          <tr>
             <td className="b"><small>2:00 pm</small></td>
             <td>
                 <strong>Boxing</strong> <br/>
                 <span>2:00 pm - 4:00 pm</span>
             </td>
             <td>
                 <strong>Power lifting</strong> <br/>
                 <span>3:00 pm - 6:00 pm</span>
             </td>
             <td></td>
             <td>
                 <strong>Cardio</strong> <br/>
                 <span>6:00 pm - 9:00 pm</span>
             </td>
             <td></td>
             <td>
                 <strong>Crossfit</strong> <br/>
                 <span>5:00 pm - 7:00 pm</span>
             </td>
          </tr>
      </tbody>
  </table>
  </div>
</div>
)
}