package com.yidu.zto.entity;

/**
 * @author XiongAiWen
 * @version 1.0
 * @description:
 * @data 2021/4/6 23:32
 */
public class Data {
    private String name;
    private String phone;
    private String province;
    private String city;
    private String district;
    private String detailAddress;
    private String goodsName;
    private String weight;

    public Data() {
    }

    public Data(String name, String phone, String province, String city, String district, String detailAddress, String goodsName, String weight) {
        this.name = name;
        this.phone = phone;
        this.province = province;
        this.city = city;
        this.district = district;
        this.detailAddress = detailAddress;
        this.goodsName = goodsName;
        this.weight = weight;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getDetailAddress() {
        return detailAddress;
    }

    public void setDetailAddress(String detailAddress) {
        this.detailAddress = detailAddress;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    @Override
    public String toString() {
        return "Data{" +
                "name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", province='" + province + '\'' +
                ", city='" + city + '\'' +
                ", district='" + district + '\'' +
                ", detailAddress='" + detailAddress + '\'' +
                ", goodsName='" + goodsName + '\'' +
                ", weight='" + weight + '\'' +
                '}';
    }
}
