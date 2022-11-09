package com.yidu.zto.entity;

import java.util.Date;
import java.io.Serializable;

/**
 * (Order)实体类
 *
 * @author makejava
 * @since 2021-04-23 14:59:45
 */
public class Order implements Serializable {
    private static final long serialVersionUID = -50287476020196204L;
    /**
     * 订单id
     */
    private Integer orderid;
    /**
     * 订单号
     */
    private String ordernumber;
    /**
     * 订单状态
     */
    private Integer orderstate;
    /**
     * 订单创建时间
     */
    private Date createdate;
    /**
     * 订单更新时间
     */
    private Date updatedate;
    /**
     * 寄方地址id
     */
    private Integer sendAddressid;
    /**
     * 收方地址id
     */
    private Integer receiceAddressid;
    /**
     * 是否有效
     */
    private Integer isValid;
    /**
     * 快递单号
     */
    private String expressnumber;
    /**
     * 客户id
     */
    private Integer customerId;
    /**
     * 付款方式
     */
    private Integer payWay;
    /**
     * 用户id
     */
    private Integer userId;


    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public String getOrdernumber() {
        return ordernumber;
    }

    public void setOrdernumber(String ordernumber) {
        this.ordernumber = ordernumber;
    }

    public Integer getOrderstate() {
        return orderstate;
    }

    public void setOrderstate(Integer orderstate) {
        this.orderstate = orderstate;
    }

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }

    public Date getUpdatedate() {
        return updatedate;
    }

    public void setUpdatedate(Date updatedate) {
        this.updatedate = updatedate;
    }

    public Integer getSendAddressid() {
        return sendAddressid;
    }

    public void setSendAddressid(Integer sendAddressid) {
        this.sendAddressid = sendAddressid;
    }

    public Integer getReceiceAddressid() {
        return receiceAddressid;
    }

    public void setReceiceAddressid(Integer receiceAddressid) {
        this.receiceAddressid = receiceAddressid;
    }

    public Integer getIsValid() {
        return isValid;
    }

    public void setIsValid(Integer isValid) {
        this.isValid = isValid;
    }

    public String getExpressnumber() {
        return expressnumber;
    }

    public void setExpressnumber(String expressnumber) {
        this.expressnumber = expressnumber;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public Integer getPayWay() {
        return payWay;
    }

    public void setPayWay(Integer payWay) {
        this.payWay = payWay;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderid=" + orderid +
                ", ordernumber='" + ordernumber + '\'' +
                ", orderstate=" + orderstate +
                ", createdate=" + createdate +
                ", updatedate=" + updatedate +
                ", sendAddressid=" + sendAddressid +
                ", receiceAddressid=" + receiceAddressid +
                ", isValid=" + isValid +
                ", expressnumber='" + expressnumber + '\'' +
                ", customerId=" + customerId +
                ", payWay=" + payWay +
                ", userId=" + userId +
                '}';
    }
}
