import { useState } from "react";
import { CRow, CCol, CCard, CCardBody, CCardHeader } from "@coreui/react";
import { Button, Form, Input } from "antd";
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

const AddMovie = () => {
  const [form] = useForm();
  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    language: "",
    year: "",
    actor: "",
    director: "",
    length: "",
    point: "",
    des: "",
    thumb: "",
    trailer: "",
    source: "",
  });

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then(() => {
        console.log("Form data submitted:", formData);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  return (
    <CRow className="flex items-center justify-center min-h-[100vh]">
      <CCol className="m-6 w-1/2">
        <CCard>
          <CCardHeader className="flex justify-center text-3xl items-center mb-8">
            Add New Movie
          </CCardHeader>
          <CCardBody>
            <Form {...formItemLayout} form={form} onFinish={handleSubmit}>
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
                className="w-full px-4  bg-red-500 text-black mt-2 text-white"
              >
                Submit
              </Button>
            </Form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default AddMovie;
