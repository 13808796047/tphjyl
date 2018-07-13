<?php

namespace Admin\Logic;

class MenuLogic  {
    public function getMenus(){
        $menus  =   session('ADMIN_MENU_LIST'.$controller);
        if(empty($menus)){
			// 获取主菜单
			$where['pid']	=	0;
			$where['hide']	=	0;
			if(!C('DEVELOP_MODE')){ // 是否开发者模式
				$where['is_dev']	=	0;
			}
            $menus['main']  =	M('Menu')->where($where)->order('sort asc')->select();

            $menus['child'] = array(); //设置子节点
            //高亮主菜单 //加上排序，使最后添加的排最前 不然取得是之前未删掉的旧值 by xief 20160304
            $current = M('Menu')->where("url like '%{$controller}/".ACTION_NAME."%'")->order('id desc')->field('id')->find();
            $nav = D('Menu')->getPath($current['id']);
            $nav_first_title = $nav[0]['title'];
            $servants=array('count/','data/','business/');
            $user=session('user_auth');
            foreach ($menus['main'] as $key => $item) {
                if (!is_array($item) || empty($item['title']) || empty($item['url']) ) {
                    $this->error('控制器基类$menus属性元素配置有误');
                }
                if( stripos($item['url'],MODULE_NAME)!==0 ){
                    $item['url'] = MODULE_NAME.'/'.$item['url'];
                }
                //主菜单客服权限
                if($user['sb']==2)
                {
                    if(strpos($item['title'],'首页')!=FALSE){
                        unset($menus['main'][$key]);
                        continue;
                    }
                    $mainUrl=$item['url'];
                    $mainUrl=str_ireplace('/index','',$mainUrl);          
                    foreach($servants as $svKey=>$sv)
                    {
                        if( stripos($sv,MODULE_NAME)!==0 ){
                            $sv= MODULE_NAME.'/'.$sv;
                        }
                        if(stripos($sv, $mainUrl)===FALSE && stripos($mainUrl,$sv)===FALSE)
                        {
                            $del=TRUE;
                            break;
                        }else{
                            $del=FALSE;
                            $servantPattern=$sv;
                        }
                    }
                    if($del===TRUE){
                        unset($menus['main'][$key]);
                        continue;
                    }
                }                
                // 判断主菜单权限
                if ( !IS_ROOT && !$this->checkRule($item['url'],AuthRuleModel::RULE_MAIN,null) ) {
                    unset($menus['main'][$key]);
                    continue;//继续循环
                }

				// 获取当前主菜单的子菜单项
                if($item['title'] == $nav_first_title){
                    $menus['main'][$key]['class']='current';
                    //生成child树
                    $groups = M('Menu')->where("pid = {$item['id']}")->distinct(true)->field("`group`")->select();
					if($groups){
						$groups = array_column($groups, 'group');
					}else{
						$groups	=	array();
					}

                    //获取二级分类的合法url
					$where			=	array();
					$where['pid']	=	$item['id'];
					$where['hide']	=	0;
					if(!C('DEVELOP_MODE')){ // 是否开发者模式
						$where['is_dev']	=	0;
					}
                    $second_urls = M('Menu')->where($where)->getField('id,url');

                    // trace($second_urls);
					if(!IS_ROOT){
						// 检测菜单权限
						$to_check_urls = array();
						foreach ($second_urls as $key=>$to_check_url) {
							if( stripos($to_check_url,MODULE_NAME)!==0 ){
								$rule = MODULE_NAME.'/'.$to_check_url;
							}else{
								$rule = $to_check_url;
							}
							if($this->checkRule($rule, AuthRuleModel::RULE_URL,null))
								$to_check_urls[] = $to_check_url;
						}
					}
					// 按照分组生成子菜单树
                    foreach ($groups as $g) {
                        $map = array('group'=>$g);
                        if(isset($to_check_urls)){
							if(empty($to_check_urls)){
								// 没有任何权限
								continue;
							}else{
								$map['url'] = array('in', $to_check_urls);
							}
						}
						$map['pid']	=	$item['id'];
						$map['hide']	=	0;
						if(!C('DEVELOP_MODE')){ // 是否开发者模式
							$map['is_dev']	=	0;
						}
                        $menuList = M('Menu')->where($map)->field('id,pid,title,url,tip')->order('sort asc')->select();
                        if(isset($servantPattern)){
                            foreach($menuList as $smKey=>$smVal)
                            {
                                $smUrl=$smVal['url'];
                                if( stripos($smUrl,MODULE_NAME)!==0 ){
                                    $smUrl = MODULE_NAME.'/'.$smUrl;
                                }                                
                                if(stripos($smUrl,$servantPattern)===FALSE && stripos($servantPattern, $smUrl)===FALSE){
                                    unset($menuList[$smKey]);
                                }
                            }
                        }
                        $menus['child'][$g] = list_to_tree($menuList, 'id', 'pid', 'operater', $item['id']);
                    }
                    if($menus['child'] === array()){
                        //$this->error('主菜单下缺少子菜单，请去系统=》后台菜单管理里添加');
                    }
                }
            }

            // session('ADMIN_MENU_LIST'.$controller,$menus);
        }
        return $menus;
    }
}