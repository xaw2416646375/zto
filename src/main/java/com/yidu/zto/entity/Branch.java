package com.yidu.zto.entity;

import java.io.Serializable;

/**
 * (Branch)实体类
 *
 * @author makejava
 * @since 2021-05-10 10:18:28
 */
public class Branch implements Serializable {
    private static final long serialVersionUID = 921650803691813629L;
    /**
     * 网点id
     */
    private Integer branchId;
    /**
     * 网点地址
     */
    private String branchAddress;
    /**
     * 1.省2.市3.区4.街道
     */
    private Integer branchType;
    /**
     * 网点管理人员
     */
    private Integer userId;
    /**
     * 网点联系号码
     */
    private String branchPhone;
    /**
     * 网点编号
     */
    private String branchNumber;
    /**
     * 父网点编号
     */
    private String parentNumber;
    /**
     * 坐标
     */
    private String coordinate;


    public Integer getBranchId() {
        return branchId;
    }

    public void setBranchId(Integer branchId) {
        this.branchId = branchId;
    }

    public String getBranchAddress() {
        return branchAddress;
    }

    public void setBranchAddress(String branchAddress) {
        this.branchAddress = branchAddress;
    }

    public Integer getBranchType() {
        return branchType;
    }

    public void setBranchType(Integer branchType) {
        this.branchType = branchType;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getBranchPhone() {
        return branchPhone;
    }

    public void setBranchPhone(String branchPhone) {
        this.branchPhone = branchPhone;
    }

    public String getBranchNumber() {
        return branchNumber;
    }

    public void setBranchNumber(String branchNumber) {
        this.branchNumber = branchNumber;
    }

    public String getParentNumber() {
        return parentNumber;
    }

    public void setParentNumber(String parentNumber) {
        this.parentNumber = parentNumber;
    }

    public String getCoordinate() {
        return coordinate;
    }

    public void setCoordinate(String coordinate) {
        this.coordinate = coordinate;
    }

}
