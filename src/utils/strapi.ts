import Strapi from 'strapi-sdk-js';
import { ComponentSchema } from '../types/lowCodeCompo.type';

const strapi = new Strapi();


// 保存页面
export async function savePage(components:ComponentSchema[]){
    console.log('components',components);
   const res= await strapi.create('pages',{components})
   console.log(res.data);
}

// 更新页面
export async function updatePage(id:number,components:ComponentSchema[]){
    console.log('components',components);
   const res= await strapi.update('pages',id,{components})
   console.log(res.data);
}


// 删除页面
export async function deletePage(id:number){
   const res= await strapi.delete('pages',id)
   console.log(res.data);
}


// 查询单页面
export async function findPage(id:number){
   console.log('查询单页面',id);
   
   const res= await strapi.findOne('pages',id)
   console.log(res.data);
}


// 查询所有页面
export async function findAllPage(){
    console.log('查询所有页面');
   const res= await strapi.find('pages')
   console.log(res.data);
}
