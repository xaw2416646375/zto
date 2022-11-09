package com.yidu.zto.entity;

import java.util.Date;
import java.io.Serializable;

/**
 * (OrderAddress)实体类
 *
 * @author makejava
 * @since 2021-04-20 22:27:15
 */
public class OrderAddress implements Serializable {
    private static final long serialVersionUID = 957488697914152081L;
    /**
     * 订单地址id
     */
    private Integer orderAddressId;
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
     * 详细地址
     */
    private String detailAddress;
    /**
     * 收发件人
     */
    private String sendReceiveMan;
    /**
     * 地址类型 0收件 1 寄件
     */
    private Integer addressType;
    /**
     * 手机号
     */
    private String phone;
    /**
     * 创建时间
     */
    private Date createdate;

    /**
     * 客户id
     */
    private Integer customerId;

    public Integer getOrderAddressId() {
        return orderAddressId;
    }

    public void setOrderAddressId(Integer orderAddressId) {
        this.orderAddressId = orderAddressId;
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

    public String getSendReceiveMan() {
        return sendReceiveMan;
    }

    public void setSendReceiveMan(String sendReceiveMan) {
        this.sendReceiveMan = sendReceiveMan;
    }

    public Integer getAddressType() {
        return addressType;
    }

    public void setAddressType(Integer addressType) {
        this.addressType = addressType;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }
}
