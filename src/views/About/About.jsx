import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card className="card-accent-primary">
              <CardHeader>Tentang Kami</CardHeader>
              <CardBody>
                <h3>Dandani Covid19</h3>
                <p className="lead">
                  Dandani Covid19 merupakan sebuah Web berbentuk Dashboard yang
                  menampilkan data penyebaran Pandemi Virus Corona secara Global
                  dan Indonesia umumnya, dan Kota Cilegon/Serang pada khususnya.
                  Dashboard juga menyediakan informasi/acara sebagai referensi
                  agar orang betah #DiRumahAja.
                </p>
                <h6>Web App Development</h6>
                <p>
                  Web App mempunyai nama "Dandani" yang berasal dari bahasa jawa
                  dengan arti "Memperbaiki", dengan harapan agar
                  Indonesia/Global bisa memperbaiki semua efek dari Virus
                  Corona. Dashboard dikembangkan menggunakan Reactjs dengan
                  CoreUI sebagai User Interface, dan memanfaatkan Hosting (Free)
                  dari Netlify.com.
                </p>
                <h6>Saling Berbagi</h6>
                <p>
                  Dashboard ini dibuat untuk berbagi data dan informasi tentang
                  Virus Corona, bukan untuk Komersil atau Diperjual-Belikan.
                  Segala data, informasi, atau gambar berasal dari Third-party
                  (API, Organisasi, Akun Media Social, dsb).
                </p>
                <h6>Thanks</h6>
                <p>
                  Terima kasih atas segala pihak yang tidak dapat disebutkan
                  satu-persatu yang telah berkontribusi membantu pembuatan
                  "Dandani Covid 19".
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="card-accent-primary">
              <CardHeader>Referensi Data (API)</CardHeader>
              <CardBody>
                <h4>Source Data</h4>
                <p>
                  Data berasal dari worldometers, WHO, John Hopkins University
                  CSSE, dan Organisasi terkemuka di Dunia dengan menggunakan
                  Referensi Open/Public API (Application Programming Interface).
                  Berikut ini detil Source Data API:
                </p>
                <h6>Corona Virus Data API</h6>
                <p>
                  <a href="https://documenter.getpostman.com/view/8854915/SzS7R74n?version=latest">
                    API
                  </a>{" "}
                  digunakan untuk mendapatkan data penyebaran Covid-19 di
                  Indonesia. Menampilkan peringkat Indonesia di Dunia, banyaknya
                  orang yang terjangkit, dalam perawatan, sembuh, dan meninggal.
                </p>
                <h6>Kawal Korona</h6>
                <p>
                  <a href="https://kawalcorona.com/api/">API</a> digunakan untuk
                  mendapatkan data penyebaran Covid-19 di Global dan Provinsi
                  Indonesia. Menampilkan banyaknya orang yang terjangkit, dalam
                  perawatan, sembuh, dan meninggal.
                </p>
                <h6>ESSC Kawal Covid19</h6>
                <p>
                  <a href="https://essc-kawalcovid19.hub.arcgis.com/datasets/referral-hospital-for-covid-19-1?geometry=88.383%2C-9.959%2C147.665%2C5.364&orderBy=Provinsi">
                    API
                  </a>{" "}
                  digunakan untuk mendapatkan data Rumah Sakit Rujukan di
                  Indonesia.
                </p>
                <h6>Instagram</h6>
                <p>
                  Data dari Instagram digunakan untuk mendapatkan gambar,
                  informasi, dan referensi tentang Program #DiRumahAja. Terdiri
                  dari akun @dicoding, @idcamp, @buyayahya_albahjah.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
