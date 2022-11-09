package com.yidu.zto.entity;
/**
 * (Concern)实体类
 *
 * @author makejava
 * @since 2021-05-10 10:18:28
 */
public class Concern {

    /**
     * 寄件或者收件
     */
    private String sendOrShou;

    /**
     * 快递单号
     */
    private String expressNumber;

    /**
     * 寄件地址对象
     */
    private OrderAddress jiAddress;

    /**
     * 收件地址对象
     */
    private OrderAddress shouAddress;

    /**
     * 物流信息
     */
    private Logisticstracking logisticstracking;

    /**
     * 状态
     */
    private Integer state;

    public String getSendOrShou() {
        return sendOrShou;
    }

    public void setSendOrShou(String sendOrShou) {
        this.sendOrShou = sendOrShou;
    }

    public String getExpressNumber() {
        return expressNumber;
    }

    public void setExpressNumber(String expressNumber) {
        this.expressNumber = expressNumber;
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

    public Logisticstracking getLogisticstracking() {
        return logisticstracking;
    }

    public void setLogisticstracking(Logisticstracking logisticstracking) {
        this.logisticstracking = logisticstracking;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return "Concern{" +
                "sendOrShou='" + sendOrShou + '\'' +
                ", expressNumber='" + expressNumber + '\'' +
                ", jiAddress=" + jiAddress +
                ", shouAddress=" + shouAddress +
                ", logisticstracking=" + logisticstracking +
                ", state=" + state +
                '}';
    }
}
