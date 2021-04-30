package com.yidu.zto.entity;

public class QueryOrderField {
    /**
     * 客户id
     */
    private int customerId;
    /**
     * 开始时间
     */
    private String createDate;
    /**
     * 结束时间
     */
    private String createDateTwo;
    /**
     * 寄件号码或者名字
     */
    private String sendName;
    /**
     * 收件号码或者名字或者订单号
     */
    private String receiceName;
    /**
     * 手机号
     */
    private String phone;
    /**
     * 页数
     */
    private int offset;
    /**
     * 条数
     */
    private int limit;

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getCreateDateTwo() {
        return createDateTwo;
    }

    public void setCreateDateTwo(String createDateTwo) {
        this.createDateTwo = createDateTwo;
    }

    public String getSendName() {
        return sendName;
    }

    public void setSendName(String sendName) {
        this.sendName = sendName;
    }

    public String getReceiceName() {
        return receiceName;
    }

    public void setReceiceName(String receiceName) {
        this.receiceName = receiceName;
    }

    public int getOffset() {
        return offset;
    }

    public void setOffset(int offset) {
        this.offset = (offset-1)*this.limit;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    @Override
    public String toString() {
        return "QueryOrderField{" +
                "customerId=" + customerId +
                ", createDate='" + createDate + '\'' +
                ", createDateTwo='" + createDateTwo + '\'' +
                ", sendName='" + sendName + '\'' +
                ", receiceName='" + receiceName + '\'' +
                ", phone='" + phone + '\'' +
                ", offset=" + offset +
                ", limit=" + limit +
                '}';
    }
}
