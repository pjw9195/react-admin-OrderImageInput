import React, {useState} from 'react'
import {Create, FormDataConsumer, ImageField, SimpleForm} from 'react-admin'
import {required} from '../../validators'
import CreateActions from '../../custom/common/CreateActions'
import CreateToolbar from '../../custom/common/CreateToolbar'
import OrderImageInput from "../../custom/common/DragOrderImage/OrderImageInput"

export default (props) => {
  const [data, setData] = useState([])
  return (
      <Create {...props} actions={<CreateActions/>}>
        <SimpleForm
            toolbar={<CreateToolbar/>}>

          <FormDataConsumer>
            {({formData, ...rest}) => {
              if (data.length > 0) {
                formData.images = data
              }
              return (
                  <OrderImageInput label='상세 이미지' placeholder={<p>이미지 여러 개 끌어다 넣거나, 클릭 후 여러 개 선택하십시오.</p>} multiple
                                   setState={setData} source="images" accept="image/*"
                                   validate={required}>
                    <ImageField source="image" title="title"/>
                  </OrderImageInput>)
            }
            }
          </FormDataConsumer>

        </SimpleForm>
      </Create>
  )
}

