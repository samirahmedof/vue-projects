<template>
  <div class="productDetail">
    <div class="row justify-content-center">
      <div class="col-10">
        <h4 class="mt-0 headerTitle">{{Page}}</h4>
        <div class="productContent">
          <div class="row">
            <div class="col-md-7">
              <Carousel :media="mainData[itemIndex-1].img" />
            </div>
            <div class="col-md-5">
              <div class="productName">
                <h5>{{ mainData[itemIndex-1].name }}</h5>
              </div>
              <div class="productCode">
                <h5>{{ mainData[itemIndex-1].vendor }}</h5>
              </div>
              <div class="productDescr">
                <p>{{ mainData[itemIndex-1].description }}</p>
              </div>
              <div class="productVAT">
                <h6>{{ mainData[itemIndex-1].vat }}% VAT included</h6>
              </div>
              <div class="productPrice">
                <div class="row">
                  <div class="col-6">
                    <div class="price">
                      <span>Retail: {{ mainData[itemIndex-1].retail }}$</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="price">
                      <span>Wholesale: {{ mainData[itemIndex-1].wholesale }}$</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="productTable">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>36</th>
                      <th>38</th>
                      <th>40</th>
                      <th>42</th>
                      <th>44</th>
                      <th>46</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A</td>
                      <td>
                        <span>
                          <input type="text" class="form-control" />
                        </span>
                      </td>
                      <td>
                        <span>
                          <input type="text" class="form-control" />
                        </span>
                      </td>
                      <td></td>
                      <td>
                        <span>
                          <input type="text" class="form-control" />
                        </span>
                      </td>
                      <td>
                        <span>
                          <input type="text" class="form-control" />
                        </span>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td></td>
                      <td>
                        <span>
                          <input type="text" class="form-control" />
                        </span>
                      </td>
                      <td>
                        <span>
                          <input type="text" class="form-control" />
                        </span>
                      </td>
                      <td></td>
                      <td>
                        <span>
                          <input type="text" class="form-control" />
                        </span>
                      </td>
                      <td>
                        <span>
                          <input type="text" class="form-control" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td></td>
                      <td></td>
                      <td>
                        <span>
                          <input type="text" class="form-control" />
                        </span>
                      </td>
                      <td>
                        <span>
                          <input type="text" class="form-control" />
                        </span>
                      </td>
                      <td>
                        <span>
                          <input type="text" class="form-control" />
                        </span>
                      </td>
                      <td>
                        <span>
                          <input type="text" class="form-control" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="btnRow text-center mt-4">
                <button class="btn btn-pr">Save</button>
                <router-link to="/catalog" class="btn btn-pr">Back to catalog</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "./../../shared/Carousel";
export default {
  data() {
    return {
      Page: "Product detail",
      itemIndex: this.$route.params.id,
    };
  },
  computed: {
    mainData() {
      let data = [
        {
          id: "1",
          name: "Test",
          vendor: "L2001",
          img: [
            {
              id: "i1",
              type: "img",
              src: "https://via.placeholder.com/1000x1200",
            },
            {
              id: "i2",
              type: "img",
              src: "https://via.placeholder.com/140x250",
            },
            {
              id: "i3",
              type: "img",
              src: "https://via.placeholder.com/200x240",
            },
            {
              id: "i4",
              type: "img",
              src: "https://via.placeholder.com/200x220",
            },
            {
              id: "i5",
              type: "img",
              src: "https://via.placeholder.com/250x330",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          vat: "20",
        },
        {
          id: "2",
          name: "Test",
          vendor: "L2001",
          img: [
            {
              id: "i1",
              type: "video",
              src: "src/assets/img/video.mp4",
            },
            {
              id: "i2",
              type: "img",
              src: "https://via.placeholder.com/140x250",
            },
            {
              id: "i3",
              type: "img",
              src: "https://via.placeholder.com/200x240",
            },
            {
              id: "i4",
              type: "img",
              src: "https://via.placeholder.com/200x220",
            },
            {
              id: "i5",
              type: "img",
              src: "https://via.placeholder.com/250x330",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          vat: "20",
        },
        {
          id: "3",
          name: "Test",
          vendor: "L2001",
          img: [
            {
              id: "i1",
              type: "img",
              src: "https://via.placeholder.com/1000x1200",
            },
            {
              id: "i2",
              type: "img",
              src: "https://via.placeholder.com/140x250",
            },
            {
              id: "i3",
              type: "img",
              src: "https://via.placeholder.com/200x240",
            },
            {
              id: "i4",
              type: "img",
              src: "https://via.placeholder.com/200x220",
            },
            {
              id: "i5",
              type: "img",
              src: "https://via.placeholder.com/250x330",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          vat: "20",
        },
        {
          id: "4",
          name: "Test",
          vendor: "L2001",
          img: [
            {
              id: "i1",
              type: "video",
              src: "src/assets/img/video.mp4",
            },
            {
              id: "i2",
              type: "img",
              src: "https://via.placeholder.com/140x250",
            },
            {
              id: "i3",
              type: "img",
              src: "https://via.placeholder.com/200x240",
            },
            {
              id: "i4",
              type: "img",
              src: "https://via.placeholder.com/200x220",
            },
            {
              id: "i5",
              type: "img",
              src: "https://via.placeholder.com/250x330",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          vat: "20",
        },
        {
          id: "5",
          name: "Test",
          vendor: "L2001",
          img: [
            {
              id: "i1",
              type: "img",
              src: "https://via.placeholder.com/1000x1200",
            },
            {
              id: "i2",
              type: "img",
              src: "https://via.placeholder.com/140x250",
            },
            {
              id: "i3",
              type: "img",
              src: "https://via.placeholder.com/200x240",
            },
            {
              id: "i4",
              type: "img",
              src: "https://via.placeholder.com/200x220",
            },
            {
              id: "i5",
              type: "img",
              src: "https://via.placeholder.com/250x330",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          vat: "20",
        },
        {
          id: "6",
          name: "Test",
          vendor: "L2001",
          img: [
            {
              id: "i1",
              type: "video",
              src: "src/assets/img/video.mp4",
            },
            {
              id: "i2",
              type: "img",
              src: "https://via.placeholder.com/140x250",
            },
            {
              id: "i3",
              type: "img",
              src: "https://via.placeholder.com/200x240",
            },
            {
              id: "i4",
              type: "img",
              src: "https://via.placeholder.com/200x220",
            },
            {
              id: "i5",
              type: "img",
              src: "https://via.placeholder.com/250x330",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          vat: "20",
        },
        {
          id: "7",
          name: "Test",
          vendor: "L2001",
          img: [
            {
              id: "i1",
              type: "img",
              src: "https://via.placeholder.com/1000x1200",
            },
            {
              id: "i2",
              type: "img",
              src: "https://via.placeholder.com/140x250",
            },
            {
              id: "i3",
              type: "img",
              src: "https://via.placeholder.com/200x240",
            },
            {
              id: "i4",
              type: "img",
              src: "https://via.placeholder.com/200x220",
            },
            {
              id: "i5",
              type: "img",
              src: "https://via.placeholder.com/250x330",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          vat: "20",
        },
        {
          id: "8",
          name: "Test",
          vendor: "L2001",
          img: [
            {
              id: "i1",
              type: "video",
              src: "src/assets/img/video.mp4",
            },
            {
              id: "i2",
              type: "img",
              src: "https://via.placeholder.com/140x250",
            },
            {
              id: "i3",
              type: "img",
              src: "https://via.placeholder.com/200x240",
            },
            {
              id: "i4",
              type: "img",
              src: "https://via.placeholder.com/200x220",
            },
            {
              id: "i5",
              type: "img",
              src: "https://via.placeholder.com/250x330",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          vat: "20",
        },
        {
          id: "9",
          name: "Test",
          vendor: "L2001",
          img: [
            {
              id: "i1",
              type: "video",
              src: "src/assets/img/video.mp4",
            },
            {
              id: "i2",
              type: "img",
              src: "https://via.placeholder.com/140x250",
            },
            {
              id: "i3",
              type: "img",
              src: "https://via.placeholder.com/200x240",
            },
            {
              id: "i4",
              type: "img",
              src: "https://via.placeholder.com/200x220",
            },
            {
              id: "i5",
              type: "img",
              src: "https://via.placeholder.com/250x330",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          vat: "20",
        },
        {
          id: "10",
          name: "Test",
          vendor: "L2001",
          img: [
            {
              id: "i1",
              type: "video",
              src: "src/assets/img/video.mp4",
            },
            {
              id: "i2",
              type: "img",
              src: "https://via.placeholder.com/140x250",
            },
            {
              id: "i3",
              type: "img",
              src: "https://via.placeholder.com/200x240",
            },
            {
              id: "i4",
              type: "img",
              src: "https://via.placeholder.com/200x220",
            },
            {
              id: "i5",
              type: "img",
              src: "https://via.placeholder.com/250x330",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          vat: "20",
        },
      ];
      return data;
    },
  },
  components: {
    Carousel,
  },
};
</script>