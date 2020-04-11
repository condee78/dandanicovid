import React, { Component } from "react";
import { Table, Card, CardBody, CardHeader, Progress } from "reactstrap";

class TableELearning extends Component {
  state = {};
  render() {
    const dataELearning = [
      {
        id: 1,
        provider: "Dicoding",
        title: "Bangun Karir Sebagai Developer Professional",
        timeChallenge: "Kapan saja",
        website: "dicoding.com",
      },
      {
        id: 2,
        provider: "Ruangguru",
        title: "Kursus Online Berbagai Bidang",
        timeChallenge: "Kapan saja",
        website: "skillacademy.com",
      },
      {
        id: 3,
        provider: "KOMINFO",
        title: "Digital Talent Scholarship 2020",
        timeChallenge: "30 Maret - 13 April 2020",
        website: "digitalent.kominfo.go.id",
      },
    ];
    return (
      <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
        <thead className="thead-light">
          <tr>
            <th>Penyelenggara</th>
            <th className="text-center">Judul</th>
            <th>Waktu</th>
            <th className="text-center">Kontak</th>
          </tr>
        </thead>
        <tbody>
          {dataELearning.map((item, index) => (
            <tr key={item.id}>
              <td>{item.provider}</td>
              <td className="text-center">{item.title}</td>
              <td>
                <small className="text-muted">{item.timeChallenge}</small>
              </td>
              <td className="text-center text-muted">{item.website}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default TableELearning;
