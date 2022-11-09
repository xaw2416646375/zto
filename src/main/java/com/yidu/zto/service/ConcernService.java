package com.yidu.zto.service;

import com.yidu.zto.entity.Concern;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * (Concern)表服务接口
 *
 * @author makejava
 * @since 2021-04-21 10:51:33
 */
public interface ConcernService  {

    /**
     * 查询猜你关心
     * @param httpSession 会话
     * @return 对象列表
     */
    List<Concern> queryConcern(HttpSession httpSession);

}
