import React, { Component } from "react";
import { Table, Card, CardBody, CardHeader, Progress } from "reactstrap";

class TableIslam extends Component {
  state = {};
  render() {
    const dataIslam = [
      {
        id: 1,
        provider: "Al-Quran Online",
        title: "Al Quran Digital Online Terjemahan Bahasa Indonesia",
        timeChallenge: "March - 13 April 2020",
        website: "mushaf.id",
      },
      {
        id: 2,
        provider: "Hadits Indonesia",
        title: "Pelajari Kumpulan Hadits Shahih",
        timeChallenge: "30 Maret - May 2020",
        website: "hadits.id",
      },
      {
        id: 3,
        provider: "Ustadz Abdul Somad",
        title: "Digital Talent Scholarship 2020",
        timeChallenge: "30 Maret - 13 April 2020",
        website: "IG: @ustadzabdulsomad_official",
      },
    ];
    return (
      <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
        <thead className="thead-light">
          <tr>
            <th>Penyelenggara</th>
            <th className="text-center">Deskripsi</th>
            {/*<th>Waktu</th>*/}
            <th className="text-center">Website</th>
          </tr>
        </thead>
        <tbody>
          {dataIslam.map((item, index) => (
            <tr key={item.id}>
              <td>{item.provider}</td>
              <td className="text-center">{item.title}</td>
              {/*<td>
                <small className="text-muted">{item.timeChallenge}</small>
              </td>*/}
              <td className="text-center text-muted">{item.website}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default TableIslam;
