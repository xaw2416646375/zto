package com.yidu.zto.entity;

import org.springframework.stereotype.Component;

import java.io.Serializable;

/**
 * (Branch)实体类
 *
 * @author makejava
 * @since 2021-05-10 09:06:49
 */
@Component
public class BranchAndUserinfo implements Serializable {
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
   /* 用户名*/
    private String username;// VARCHAR(30) DEFAULT NULL COMMENT '用户名',
    private String userpass;// VARCHAR(30) DEFAULT NULL COMMENT '用户密码',
    private String compellation; //VARCHAR(30) DEFAULT NULL COMMENT '姓名',
    private Integer is_valid; //INT(11) DEFAULT '1' COMMENT '状态 0不可用1可用',
    private String photo; //      `photo` VARCHAR(50) DEFAULT NULL COMMENT '头像',


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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserpass() {
        return userpass;
    }

    public void setUserpass(String userpass) {
        this.userpass = userpass;
    }

    public String getCompellation() {
        return compellation;
    }

    public void setCompellation(String compellation) {
        this.compellation = compellation;
    }

    public Integer getIs_valid() {
        return is_valid;
    }

    public void setIs_valid(Integer is_valid) {
        this.is_valid = is_valid;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}