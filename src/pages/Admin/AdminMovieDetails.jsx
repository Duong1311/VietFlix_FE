import React, { useState } from "react";
import { CCol, CRow, CCard, CCardBody, CCardHeader } from "@coreui/react";
import { Form, Input, Button } from "antd";
import { useForm } from "antd/lib/form/Form";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

const movieData = {
  name: "Bí Mật Của Hạnh Phúc",
  genre: "Hài hước",
  language: "Tiếng Việt",
  year: "2023",
  actor: "Nguyễn Văn A, Trần Thị B",
  director: "Lê Văn C",
  length: "120 phút",
  point: "8.5",
  des: "Bộ phim xoay quanh câu chuyện về hành trình tìm kiếm hạnh phúc của nhóm bạn thân. Những tình huống dở khóc dở cười sẽ khiến khán giả không ngừng cười.",
  thumb:
    "https://uploads.nguoidothi.net.vn/content/f29d9806-6f25-41c0-bcf8-4095317e3497.jpg",
  trailer:
    "https://www.youtube.com/watch?v=TcMBFSGVi1c&ab_channel=MarvelEntertainment",
  source:
    "https://www.youtube.com/watch?v=SyE0usBjJDk&ab_channel=TungJohnPlayingChess",
};

const AdminMovieDetails = () => {
  const [form] = useForm();
  const [formData, setFormData] = useState({ ...movieData });

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        setFormData(values);
        console.log("Updated Form Data:", values);
      })
      .catch((errorInfo) => {
        console.log("Validation Failed:", errorInfo);
      });
  };

  return (
    <CRow className="flex items-center justify-center min-h-[100vh]">
      <CCol className="m-6 w-1/2">
        <CCard>
          <CCardHeader className="flex justify-center text-3xl items-center mb-8">
            Movie Details
          </CCardHeader>
          <CCardBody>
            <Form
              {...formItemLayout}
              form={form}
              onFinish={handleSubmit}
              initialValues={formData}
            >
              <Form.Item
                label="Tên"
                labelAlign="left"
                name="name"
                rules={[{ required: true, message: "Không được bỏ trống!" }]}
                className="mb-2"
              >
                <Input
                  placeholder="Nhập tên"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </Form.Item>

              <Form.Item
                label="Thể loại"
                labelAlign="left"
                name="genre"
                rules={[{ required: true, message: "Không được bỏ trống!" }]}
                className="mb-2"
              >
                <Input
                  placeholder="Nhập thể loại"
                  value={formData.genre}
                  onChange={(e) => handleInputChange("genre", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </Form.Item>
              <Form.Item
                label="Ngôn ngữ"
                labelAlign="left"
                name="language"
                rules={[{ required: true, message: "Không được bỏ trống!" }]}
                className="mb-2"
              >
                <Input
                  placeholder="Nhập ngôn ngữ phim"
                  value={formData.language}
                  onChange={(e) =>
                    handleInputChange("language", e.target.value)
                  }
                  className="w-full px-3 py-2 border rounded"
                />
              </Form.Item>
              <Form.Item
                label="Diễn viên"
                labelAlign="left"
                name="actor"
                rules={[{ required: true, message: "Không được bỏ trống!" }]}
                className="mb-2"
              >
                <Input
                  placeholder="Nhập tên diễn viên"
                  value={formData.actor}
                  onChange={(e) => handleInputChange("actor", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </Form.Item>

              <Form.Item
                label="Đạo diễn"
                labelAlign="left"
                name="director"
                rules={[{ required: true, message: "Không được bỏ trống!" }]}
                className="mb-2"
              >
                <Input
                  placeholder="Nhập tên đạo diễn"
                  value={formData.director}
                  onChange={(e) =>
                    handleInputChange("director", e.target.value)
                  }
                  className="w-full px-3 py-2 border rounded"
                />
              </Form.Item>
              <Form.Item
                label="Năm"
                labelAlign="left"
                name="year"
                rules={[{ required: true, message: "Không được bỏ trống!" }]}
                className="mb-2"
              >
                <Input
                  placeholder="Nhập năm phát hành"
                  value={formData.year}
                  onChange={(e) => handleInputChange("year", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </Form.Item>
              <Form.Item
                label="Thời lượng"
                labelAlign="left"
                name="length"
                rules={[{ required: true, message: "Không được bỏ trống!" }]}
                className="mb-2"
              >
                <Input
                  placeholder="Nhập thời lượng bộ phim"
                  value={formData.length}
                  onChange={(e) => handleInputChange("length", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </Form.Item>
              <Form.Item
                label="IMDB"
                labelAlign="left"
                name="point"
                rules={[
                  { required: true, message: "Không được bỏ trống!" },
                  {
                    type: "url",
                    message: "Vui lòng nhập đúng định dạng URL",
                  },
                ]}
                className="mb-2"
              >
                <Input
                  placeholder="Nhập điểm IMDB"
                  value={formData.point}
                  onChange={(e) => handleInputChange("point", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </Form.Item>
              <Form.Item
                label="Mô tả"
                labelAlign="left"
                name="des"
                rules={[{ required: true, message: "Không được bỏ trống!" }]}
                className="mb-2"
              >
                <Input
                  placeholder="Nhập mô tả của phim"
                  value={formData.des}
                  onChange={(e) => handleInputChange("des", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </Form.Item>
              <Form.Item
                label="Thumbnail"
                labelAlign="left"
                name="thumb"
                rules={[
                  { required: true, message: "Không được bỏ trống!" },
                  {
                    type: "url",
                    message: "Vui lòng nhập đúng định dạng URL",
                  },
                ]}
                className="mb-2"
              >
                <Input
                  placeholder="Nhập URL thumbnail"
                  value={formData.thumb}
                  onChange={(e) => handleInputChange("thumb", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </Form.Item>
              <Form.Item
                label="Trailer"
                labelAlign="left"
                name="trailer"
                rules={[{ required: true, message: "Không được bỏ trống!" }]}
                className="mb-2"
              >
                <Input
                  placeholder="Nhập URL trailer phim"
                  value={formData.trailer}
                  onChange={(e) => handleInputChange("trailer", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </Form.Item>
              <Form.Item
                label="Source phim"
                labelAlign="left"
                name="source"
                rules={[
                  { required: true, message: "Không được bỏ trống!" },
                  {
                    type: "url",
                    message: "Vui lòng nhập đúng định dạng URL",
                  },
                ]}
                className="mb-2"
              >
                <Input
                  placeholder="Nhập URL source phim"
                  value={formData.source}
                  onChange={(e) => handleInputChange("source", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </Form.Item>
              <Button
                type="primary"
                block
                onClick={handleSubmit}
                className="w-full px-4 bg-red-500 text-black mt-2 text-white"
              >
                Update
              </Button>
            </Form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default AdminMovieDetails;
