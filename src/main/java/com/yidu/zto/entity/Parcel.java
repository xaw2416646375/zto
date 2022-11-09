package com.yidu.zto.entity;

import java.io.Serializable;

/**
 * (Parcel)实体类
 *
 * @author makejava
 * @since 2021-04-21 09:51:58
 */
public class Parcel implements Serializable {
    private static final long serialVersionUID = -40111379681439735L;
    /**
     * 包裹表id
     */
    private Integer parcelId;
    /**
     * 物品名
     */
    private String goodsName;
    /**
     * 重量
     */
    private Double weight;
    /**
     * 0.文件1.数码2.生活用品3.服饰4.食品5.其他
     */
    private Integer goodsType;
    /**
     * 物品数量
     */
    private Integer goodsNum;
    /**
     * 审核人
     */
    private Integer checkMan;
    /**
     * 审核结果 0.不通过 1.通过
     */
    private Integer checkResult;
    /**
     * 审核意见
     */
    private String checkOpinion;
    /**
     * 条形码地址
     */
    private String barCode;
    /**
     * 预估价格
     */
    private Double estimatePrice;
    /**
     * 网点表id
     */
    private Integer stieId;
    /**
     * 备注
     */
    private String remarks;

    /**
     * 订单id
     */
    private Integer orderid;

    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public Integer getParcelId() {
        return parcelId;
    }

    public void setParcelId(Integer parcelId) {
        this.parcelId = parcelId;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Integer getGoodsType() {
        return goodsType;
    }

    public void setGoodsType(Integer goodsType) {
        this.goodsType = goodsType;
    }

    public Integer getGoodsNum() {
        return goodsNum;
    }

    public void setGoodsNum(Integer goodsNum) {
        this.goodsNum = goodsNum;
    }

    public Integer getCheckMan() {
        return checkMan;
    }

    public void setCheckMan(Integer checkMan) {
        this.checkMan = checkMan;
    }

    public Integer getCheckResult() {
        return checkResult;
    }

    public void setCheckResult(Integer checkResult) {
        this.checkResult = checkResult;
    }

    public String getCheckOpinion() {
        return checkOpinion;
    }

    public void setCheckOpinion(String checkOpinion) {
        this.checkOpinion = checkOpinion;
    }

    public String getBarCode() {
        return barCode;
    }

    public void setBarCode(String barCode) {
        this.barCode = barCode;
    }

    public Object getEstimatePrice() {
        return estimatePrice;
    }

    public void setEstimatePrice(Double estimatePrice) {
        this.estimatePrice = estimatePrice;
    }

    public Integer getStieId() {
        return stieId;
    }

    public void setStieId(Integer stieId) {
        this.stieId = stieId;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

}
