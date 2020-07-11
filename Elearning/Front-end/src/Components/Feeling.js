import React, { Component } from 'react'

export default class Feeling extends Component {
render() {
return (
<div className="feeling">
    <div className="tile text-center">
        <h3 className="title-heading">CẢM NHẬN CỦA HỌC VIÊN</h3>
        <div className="line" />
        <p className="title-sub">Cảm nhận của học viên sau khóa học</p>
    </div>
    <div id="slidehome" className="carousel slide" data-ride="carousel" data-interval="500">
        <ol className="carousel-indicators">
            <li data-target="#slidehome" data-slide-to={0} className="active" />
            <li data-target="#slidehome" data-slide-to={1} />
            <li data-target="#slidehome" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
                <img src="images/hocvien1.jpg" alt="" className="img-fluid" />
                <div className="student">
                    <p className="description"> " Sau khi học xong khóa thiết kế đồ họa mình đã áp dụng được rất dễ
                        dàng, cách truyền đạt của thầy rất dễ hiểu, giọng nói dễ nghe và vui tính ^^ bạn nào có ý định
                        học về cái này thì nên đăng ký khóa học này nhé, cực dễ hiểu luôn. Mong thầy tạo ra nhiều khóa
                        học bổ ích hơn nữa ạ &lt;3 "</p>
                    <strong className="name float-right">Liễu Triệu Thuận – Graphic Designer Hà Nội</strong>
                </div>
            </div>
            <div className="carousel-item">
                <img src="images/hocvien2.jpg" alt="" className="img-fluid" />
                <div className="student">
                    <p className="description">" Sau khi học xong khóa thiết kế đồ họa mình đã áp dụng được rất dễ dàng,
                        cách truyền đạt của thầy rất dễ hiểu, giọng nói dễ nghe và vui tính ^^ bạn nào có ý định học về
                        cái này thì nên đăng ký khóa học này nhé, cực dễ hiểu luôn. Mong thầy tạo ra nhiều khóa học bổ
                        ích hơn nữa ạ &lt;3 " </p>
                    <strong className="name float-right">Nguyễn Nhật Thiên – Graphic Designer Hà Nội</strong>
                </div>
            </div>
            <div className="carousel-item">
                <img src="images/hocvien3.jpg" alt="" className="img-fluid" />
                <div className="student">
                    <p className="description">" Sau khi học xong khóa thiết kế đồ họa mình đã áp dụng được rất dễ dàng,
                        cách truyền đạt của thầy rất dễ hiểu, giọng nói dễ nghe và vui tính ^^ bạn nào có ý định học về
                        cái này thì nên đăng ký khóa học này nhé, cực dễ hiểu luôn. Mong thầy tạo ra nhiều khóa học bổ
                        ích hơn nữa ạ &lt;3 "</p>
                    <strong className="name float-right">Nguyễn Ngọc Thảo Vân – Graphic Designer Hà Nội</strong>
                </div>
            </div>
        </div>
    </div>
</div>

)
}
}