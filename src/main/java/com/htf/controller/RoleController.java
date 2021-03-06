package com.htf.controller;

import com.htf.common.annotation.LogTrackingByBean;
import com.htf.common.annotation.LogTrackingByString;
import com.htf.common.annotation.PermissionTracking;
import com.htf.controller.vo.request.AddRoleRequest;
import com.htf.controller.vo.request.RoleAuthorizationRequest;
import com.htf.controller.vo.request.RoleRequest;
import com.htf.controller.vo.request.UpdateRoleRequest;
import com.htf.controller.vo.response.RoleListResult;
import com.htf.controller.vo.response.RoleResponse;
import com.htf.service.IRoleService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author acumes
 * @date 2018/8/10 16:19
 */
@RestController
@RequestMapping("/roles")
@Api(tags = "角色管理",value = "roles",description = "角色API")
public class RoleController extends BaseController{

    @Autowired
    private IRoleService roleService;

    @PostMapping("/getRoles")
    @ApiOperation(value = "获取角色列表")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(name = "Authorization", required = true, paramType = "header",
                            dataType = "string", value = "authorization header", defaultValue = "Bearer ")
            }
    )
    @PermissionTracking(methodName = "sys:role:view")
    public ResponseEntity<RoleListResult> getRoles(@RequestBody(required = false) RoleRequest request){
        RoleListResult result = new RoleListResult();
        if(request == null){
            request = new RoleRequest();
        }
        result = roleService.getRoles(request);
        return new ResponseEntity<RoleListResult>(result, HttpStatus.OK);
    }

    @PostMapping("")
    @ApiOperation(value = "添加角色")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(name = "Authorization", required = true, paramType = "header",
                            dataType = "string", value = "authorization header", defaultValue = "Bearer ")
            }
    )
    @PermissionTracking(methodName = "sys:role:add")
    @LogTrackingByBean(methodName = "getId", value = AddRoleRequest.class)
    public ResponseEntity<String> addRole(@RequestBody(required = true) AddRoleRequest request){
        try {
            roleService.addRole(request);
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<String>("success", HttpStatus.OK);
    }

    @PutMapping("")
    @ApiOperation(value = "修改角色")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(name = "Authorization", required = true, paramType = "header",
                            dataType = "string", value = "authorization header", defaultValue = "Bearer ")
            }
    )
    @PermissionTracking(methodName = "sys:role:edit")
    @LogTrackingByBean(methodName = "getId", value = UpdateRoleRequest.class)
    public ResponseEntity<String> updateRole(@RequestBody(required = true) UpdateRoleRequest request){
        roleService.updateRole(request);
        return new ResponseEntity<String>("success", HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "删除角色")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(name = "Authorization", required = true, paramType = "header",
                            dataType = "string", value = "authorization header", defaultValue = "Bearer ")
            }
    )
    @LogTrackingByString(value = 0)
    public ResponseEntity<String> delRole(@PathVariable String id){
        roleService.delRole(id);
        return new ResponseEntity<String>("success", HttpStatus.OK);
    }

    @DeleteMapping("/batchDel")
    @ApiOperation(value = "批量删除角色")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(name = "Authorization", required = true, paramType = "header",
                            dataType = "string", value = "authorization header", defaultValue = "Bearer ")
            }
    )
    @PermissionTracking(methodName = "sys:role:delete")
    @LogTrackingByString(value = 0)
    public ResponseEntity<String> batchDelRoles(@RequestParam String ids){
        roleService.batchDelRoles(ids);
        return new ResponseEntity<String>("success", HttpStatus.OK);
    }


    @GetMapping("/{id}")
    @ApiOperation(value = "获取角色详情")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(name = "Authorization", required = true, paramType = "header",
                            dataType = "string", value = "authorization header", defaultValue = "Bearer ")
            }
    )
    @PermissionTracking(methodName = "sys:role:view")
    public ResponseEntity<RoleResponse> getRole(@PathVariable String id){
        RoleResponse response = roleService.getRole(id);
        return new ResponseEntity<RoleResponse>(response, HttpStatus.OK);
    }

    @GetMapping("/menu/{id}")
    @ApiOperation(value = "获取与角色绑定的菜单id")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(name = "Authorization", required = true, paramType = "header",
                            dataType = "string", value = "authorization header", defaultValue = "Bearer ")
            }
    )
    public ResponseEntity<List<String>> getRoleMenuIds(@PathVariable String id){
        List<String> response = roleService.getRoleMenuIds(id);
        return new ResponseEntity<List<String>>(response, HttpStatus.OK);
    }

    @PostMapping("/authorization/{id}")
    @ApiOperation(value = "角色授权")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(name = "Authorization", required = true, paramType = "header",
                            dataType = "string", value = "authorization header", defaultValue = "Bearer ")
            }
    )
    @LogTrackingByBean(methodName = "getRoleId", value = RoleAuthorizationRequest.class)
    public ResponseEntity<String> authorization(@PathVariable String id,@RequestBody RoleAuthorizationRequest request){
        request.setRoleId(id);
        roleService.authorization(id, request);
        return new ResponseEntity<String>("success", HttpStatus.OK);
    }

}
