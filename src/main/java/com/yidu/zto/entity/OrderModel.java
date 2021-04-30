package com.yidu.zto.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * (Order)实体类
 *
 * @author makejava
 * @since 2021-04-21 09:04:52
 */
public class OrderModel implements Serializable {

    /**
     * 省份
     */
    private String province;

    /**
     * 详细地址
     */
    private String detailAddress;
    /**
     * 收发件人
     */
    private String sendReceiveMan;
    /**
     * 手机号
     */
    private String phone;
    /**
     * 是否保存
     */
    private Integer queDing;
    /**
     * 省份
     */
    private String shouProvince;
    /**
     * 详细地址
     */
    private String shouDetailAddress;
    /**
     * 收发件人
     */
    private String shouSendReceiveMan;
    /**
     * 手机号
     */
    private String shouPhone;

    /**
     * 是否保存
     */
    private Integer shouQueDing;

    /**
     * 0.文件1.数码2.生活用品3.服饰4.食品5.其他
     */
    private Integer goodsType;
    /**
     * 重量
     */
    private Double weight;

    /**
     * 备注
     */
    private String remarks;

    public OrderModel(String province, String detailAddress, String sendReceiveMan, String phone, Integer queDing, String shouProvince, String shouDetailAddress, String shouSendReceiveMan, String shouPhone, Integer shouQueDing, Integer goodsType, Double weight, String remarks) {
        this.province = province;
        this.detailAddress = detailAddress;
        this.sendReceiveMan = sendReceiveMan;
        this.phone = phone;
        this.queDing = queDing;
        this.shouProvince = shouProvince;
        this.shouDetailAddress = shouDetailAddress;
        this.shouSendReceiveMan = shouSendReceiveMan;
        this.shouPhone = shouPhone;
        this.shouQueDing = shouQueDing;
        this.goodsType = goodsType;
        this.weight = weight;
        this.remarks = remarks;
    }

    public OrderModel() {
    }

    @Override
    public String toString() {
        return "OrderModel{" +
                "province='" + province + '\'' +
                ", detailAddress='" + detailAddress + '\'' +
                ", sendReceiveMan='" + sendReceiveMan + '\'' +
                ", phone='" + phone + '\'' +
                ", queDing=" + queDing +
                ", shouProvince='" + shouProvince + '\'' +
                ", shouDetailAddress='" + shouDetailAddress + '\'' +
                ", shouSendReceiveMan='" + shouSendReceiveMan + '\'' +
                ", shouPhone='" + shouPhone + '\'' +
                ", shouQueDing=" + shouQueDing +
                ", goodsType=" + goodsType +
                ", weight=" + weight +
                ", remarks='" + remarks + '\'' +
                '}';
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getQueDing() {
        return queDing;
    }

    public void setQueDing(Integer queDing) {
        this.queDing = queDing;
    }

    public String getShouProvince() {
        return shouProvince;
    }

    public void setShouProvince(String shouProvince) {
        this.shouProvince = shouProvince;
    }

    public String getShouDetailAddress() {
        return shouDetailAddress;
    }

    public void setShouDetailAddress(String shouDetailAddress) {
        this.shouDetailAddress = shouDetailAddress;
    }

    public String getShouSendReceiveMan() {
        return shouSendReceiveMan;
    }

    public void setShouSendReceiveMan(String shouSendReceiveMan) {
        this.shouSendReceiveMan = shouSendReceiveMan;
    }

    public String getShouPhone() {
        return shouPhone;
    }

    public void setShouPhone(String shouPhone) {
        this.shouPhone = shouPhone;
    }

    public Integer getShouQueDing() {
        return shouQueDing;
    }

    public void setShouQueDing(Integer shouQueDing) {
        this.shouQueDing = shouQueDing;
    }

    public Integer getGoodsType() {
        return goodsType;
    }

    public void setGoodsType(Integer goodsType) {
        this.goodsType = goodsType;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}
