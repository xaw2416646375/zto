package com.yidu.zto.vo;

public class AddressBean {
    //电话号码
    private String mobile;
    //姓名
    private String  name;
    //省
    private String province_name;
    //省缩写
    private String province_shortname;
    //市
    private String city_name;
    //市缩写
    private String city_shortname;
    //区
    private String county_name;
    //区缩写
    private String county_shortname;
    //详细地址
    private String detail;

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProvince_name() {
        return province_name;
    }

    public void setProvince_name(String province_name) {
        this.province_name = province_name;
    }

    public String getProvince_shortname() {
        return province_shortname;
    }

    public void setProvince_shortname(String province_shortname) {
        this.province_shortname = province_shortname;
    }

    public String getCity_name() {
        return city_name;
    }

    public void setCity_name(String city_name) {
        this.city_name = city_name;
    }

    public String getCity_shortname() {
        return city_shortname;
    }

    public void setCity_shortname(String city_shortname) {
        this.city_shortname = city_shortname;
    }

    public String getCounty_name() {
        return county_name;
    }

    public void setCounty_name(String county_name) {
        this.county_name = county_name;
    }

    public String getCounty_shortname() {
        return county_shortname;
    }

    public void setCounty_shortname(String county_shortname) {
        this.county_shortname = county_shortname;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    @Override
    public String toString() {
        return "AddressBean{" +
                "mobile='" + mobile + '\'' +
                ", name='" + name + '\'' +
                ", province_name='" + province_name + '\'' +
                ", province_shortname='" + province_shortname + '\'' +
                ", city_name='" + city_name + '\'' +
                ", city_shortname='" + city_shortname + '\'' +
                ", county_name='" + county_name + '\'' +
                ", county_shortname='" + county_shortname + '\'' +
                ", detail='" + detail + '\'' +
                '}';
    }
}
