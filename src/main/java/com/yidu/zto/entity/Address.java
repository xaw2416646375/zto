package com.yidu.zto.entity;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Date;

/**
 * (Address)实体类
 *
 * @author makejava
 * @since 2021-04-21 10:51:33
 */
@Component
public class Address implements Serializable {
    private static final long serialVersionUID = 186746815735946026L;
    /**
    * 地址id
    */
    private Integer addressId;
    /**
    * 寄/收件人
    */
    private String sendReceiveMan;
    /**
    * 详细地址
    */
    private String detailAddress;
    /**
    * 是否默认 0 否 1是 
    */
    private Integer isDefault;
    /**
    * 地址类型 0收件 1 寄件
    */
    private Integer addressType;
    /**
    * 是否有效 0 无效 有效
    */
    private Integer isValid;
    /**
    * 客户id
    */
    private Integer customerId;
    /**
    * 手机号
    */
    private String phone;
    /**
    * 省份
    */
    private String province;
    /**
    * 市
    */
    private String city;
    /**
    * 区
    */
    private String district;
    /**
    * 地址创建时间
    */
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createdate;
    /**
    * 最有一次使用时间
    */
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date lastUseDate;


    public Integer getAddressId() {
        return addressId;
    }

    public void setAddressId(Integer addressId) {
        this.addressId = addressId;
    }

    public String getSendReceiveMan() {
        return sendReceiveMan;
    }

    public void setSendReceiveMan(String sendReceiveMan) {
        this.sendReceiveMan = sendReceiveMan;
    }

    public String getDetailAddress() {
        return detailAddress;
    }

    public void setDetailAddress(String detailAddress) {
        this.detailAddress = detailAddress;
    }

    public Integer getIsDefault() {
        return isDefault;
    }

    public void setIsDefault(Integer isDefault) {
        this.isDefault = isDefault;
    }

    public Integer getAddressType() {
        return addressType;
    }

    public void setAddressType(Integer addressType) {
        this.addressType = addressType;
    }

    public Integer getIsValid() {
        return isValid;
    }

    public void setIsValid(Integer isValid) {
        this.isValid = isValid;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
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

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }

    public Date getLastUseDate() {
        return lastUseDate;
    }

    public void setLastUseDate(Date lastUseDate) {
        this.lastUseDate = lastUseDate;
    }

    @Override
    public String toString() {
        return "Address{" +
                "addressId=" + addressId +
                ", sendReceiveMan='" + sendReceiveMan + '\'' +
                ", detailAddress='" + detailAddress + '\'' +
                ", isDefault=" + isDefault +
                ", addressType=" + addressType +
                ", isValid=" + isValid +
                ", customerId=" + customerId +
                ", phone='" + phone + '\'' +
                ", province='" + province + '\'' +
                ", city='" + city + '\'' +
                ", district='" + district + '\'' +
                ", createdate=" + createdate +
                ", lastUseDate=" + lastUseDate +
                '}';
    }
}