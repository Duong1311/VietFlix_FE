import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CRow, CCol, CCard, CCardBody, CCardHeader } from "@coreui/react";
import { Form, Input, Button, notification } from "antd";
import { useForm } from "antd/lib/form/Form";
import { getAdminMovieDetailByID, updateMovie } from "../../services/Movies";

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

const AdminMovieDetails = () => {
  const { id } = useParams();
  const [form] = useForm();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await getAdminMovieDetailByID(id);
        setFormData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        notification.error({ message: "Failed to fetch movie details" });
      }
    };

    fetchMovieDetail();
  }, [id]);

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await updateMovie(formData);
      notification.success({
        message: "Cập nhật thông tin phim thành công!",
      });
    } catch (error) {
      console.log("Update Failed:", error);
      notification.error({ message: "Cập nhật thông tin phim thất bại!" });
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <CRow className="flex items-center justify-center min-h-[100vh]">
      <CCol className="m-6 w-2/3">
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
                name="genres"
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
                name="languages"
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
                name="imdbID"
                rules={[{ required: true, message: "Không được bỏ trống!" }]}
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
                name="description"
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
                name="thumbnail"
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
                  // {
                  //   type: "url",
                  //   message: "Vui lòng nhập đúng định dạng URL",
                  // },
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
