package com.yidu.zto.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class QueryOrderModel {
    /**
     * 运单号
     */
    private String waybillNumber;
    /**
     * 下单时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @DateTimeFormat(pattern = "yyyy-MM-dd")//不转换使用springmvc时他不会将字符串转为date 导致400错误
    private Date createDate;
    /**
     * 订单号
     */
    private String orderNumber;
    /**
     * 状态
     */
    private Integer orderState;
    /**
     * 寄件地址对象
     */
    private OrderAddress jiAddress;
    /**
     * 收件地址对象
     */
    private OrderAddress shouAddress;
    /**
     * 快递员名字
     */
    private String courierName;
    /**
     * 快递员电话
     */
    private String courierPhone;

    /**
     * 订单id
     */
    private Integer orderId;

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public String getWaybillNumber() {
        return waybillNumber;
    }

    public void setWaybillNumber(String waybillNumber) {
        this.waybillNumber = waybillNumber;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    public Integer getOrderState() {
        return orderState;
    }

    public void setOrderState(Integer orderState) {
        this.orderState = orderState;
    }

    public OrderAddress getJiAddress() {
        return jiAddress;
    }

    public void setJiAddress(OrderAddress jiAddress) {
        this.jiAddress = jiAddress;
    }

    public OrderAddress getShouAddress() {
        return shouAddress;
    }

    public void setShouAddress(OrderAddress shouAddress) {
        this.shouAddress = shouAddress;
    }

    public String getCourierName() {
        return courierName;
    }

    public void setCourierName(String courierName) {
        this.courierName = courierName;
    }

    public String getCourierPhone() {
        return courierPhone;
    }

    public void setCourierPhone(String courierPhone) {
        this.courierPhone = courierPhone;
    }
}