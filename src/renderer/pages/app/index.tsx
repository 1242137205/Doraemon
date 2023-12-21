import { useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import { requestConfigUrl } from '@/shared/config';
import { useAppStore } from '@/store';

import Home from '../home';
import Detail from '../detail';
import ComfyUI from '../comfyui';

import styles from './styles.module.scss';

// const { ipcRenderer } = window.electron;

export default function App() {
  const setAppInfo = useAppStore((state) => state.setAppInfo);

  const init = async () => {
    // const res: any = await ipcRenderer.invoke('request.get', requestConfigUrl);
    // console.log('init request:', res);
    const res = {
      version: '1.0.0',
      engineVersion: '1.0.0',
      appList: [
        {
          name: 'ComfyUI启动器',
          logo: 'https://avatars.githubusercontent.com/u/121283862?v=4',
          brief: 'AI绘画、Stablediffusion GUI操作界面',
          buttonText: '进入魔法世界',
          route: '/comfyui',
          linkList: [
            {
              name: 'Github',
              link: 'https://github.com/comfyanonymous/ComfyUI.git',
            },
            {
              name: '国内镜像',
              link: 'https://g-xeps0419.coding.net/public/doraemon/ComfyUI/git/files',
            },
            {
              name: '视频教程',
              link: '',
            },
          ],
          scriptList: [
            {
              name: 'start.py',
              url: 'https://gitee.com/zhuzhukeji/annotators/raw/master/scripts/comfyui/start.py',
            },
            {
              name: 'comfyui_macos_start.sh',
              url: 'https://gitee.com/zhuzhukeji/annotators/raw/master/scripts/comfyui/comfyui_macos_start.sh',
            },
            {
              name: 'comfyui_macos_update.sh',
              url: 'https://gitee.com/zhuzhukeji/annotators/raw/master/scripts/comfyui/comfyui_macos_update.sh',
            },
            {
              name: 'comfyui_windows_start.bat',
              url: 'https://gitee.com/zhuzhukeji/annotators/raw/master/scripts/comfyui/comfyui_windows_start.bat',
            },
            {
              name: 'comfyui_windows_start_cpu.bat',
              url: 'https://gitee.com/zhuzhukeji/annotators/raw/master/scripts/comfyui/comfyui_windows_start_cpu.bat',
            },
            {
              name: 'comfyui_windows_update.bat',
              url: 'https://gitee.com/zhuzhukeji/annotators/raw/master/scripts/comfyui/comfyui_windows_update.bat',
            },
          ],
          pluginList: [
            {
              name: 'ComfyUI-Manager',
              github: 'https://github.com/ltdrdata/ComfyUI-Manager.git',
              git_cn: 'https://e.coding.net/g-xeps0419/doraemon/ComfyUI-Manager.git',
              linkList: [
                {
                  name: 'Github',
                  link: 'https://github.com/ltdrdata/ComfyUI-Manager.git',
                },
                {
                  name: '国内镜像',
                  link: 'https://g-xeps0419.coding.net/public/doraemon/ComfyUI-Manager/git/files',
                },
              ],
              modelList: [],
            },
            {
              name: 'ComfyUI-AnimateDiff-Evolved',
              github: 'https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git',
              git_cn: 'https://e.coding.net/g-xeps0419/doraemon/ComfyUI-AnimateDiff-Evolved.git',
              linkList: [
                {
                  name: 'Github',
                  link: 'https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git',
                },
                {
                  name: '国内镜像',
                  link: 'https://g-xeps0419.coding.net/public/doraemon/ComfyUI-AnimateDiff-Evolved/git/files',
                },
              ],
              modelList: [
                {
                  name: 'mm_sd_v14.ckpt',
                  targetInstallPath: 'ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models',
                  source: 'https://huggingface.co/guoyww/animatediff/tree/main',
                  url: 'https://download.openxlab.org.cn/models/Masbfca/AnimateDiff/weight/mm_sd_v14.ckpt',
                },
                {
                  name: 'mm_sd_v15.ckpt',
                  targetInstallPath: 'ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models',
                  source: 'https://huggingface.co/guoyww/animatediff/tree/main',
                  url: 'https://download.openxlab.org.cn/models/Masbfca/AnimateDiff/weight/mm_sd_v15.ckpt',
                },
                {
                  name: 'mm_sd_v15_v2.ckpt',
                  targetInstallPath: 'ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models',
                  source: 'https://huggingface.co/guoyww/animatediff/tree/main',
                  url: 'https://download.openxlab.org.cn/models/Masbfca/AnimateDiff/weight/mm_sd_v15_v2.ckpt',
                },
                {
                  name: 'temporaldiff-v1-animatediff.ckpt',
                  targetInstallPath: 'ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models',
                  source: 'https://huggingface.co/CiaraRowles/TemporalDiff/tree/main',
                  url: 'https://modelscope.cn/api/v1/models/zhuzhukeji/annotators/repo?Revision=master&FilePath=checkpoints/temporaldiff-v1-animatediff.ckpt',
                },
                {
                  name: 'animatediffMotion_v15V2.ckpt',
                  targetInstallPath: 'ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models',
                  source: 'https://civitai.com/models/108836/animatediff-motion-modules',
                  url: 'https://modelscope.cn/api/v1/models/zhuzhukeji/annotators/repo?Revision=master&FilePath=checkpoints/temporaldiff-v1-animatediff.ckpt',
                },
              ],
            },
            {
              name: 'ComfyUI_IPAdapter_plus',
              github: 'https://github.com/cubiq/ComfyUI_IPAdapter_plus.git',
              git_cn: 'https://e.coding.net/g-xeps0419/doraemon/ComfyUI_IPAdapter_plus.git',
              linkList: [
                {
                  name: 'Github',
                  link: 'https://github.com/cubiq/ComfyUI_IPAdapter_plus.git',
                },
                {
                  name: '国内镜像',
                  link: 'https://g-xeps0419.coding.net/public/doraemon/ComfyUI_IPAdapter_plus/git/files',
                },
              ],
              modelList: [
                {
                  name: 'ip_adapter_image_encoder_pytorch_model.bin',
                  targetInstallPath: 'ComfyUI/models/clip_vision',
                  source: 'https://huggingface.co/h94/IP-Adapter/tree/main',
                  url: 'https://bj.bcebos.com/v1/ai-studio-online/netdisk/9b646654750e4d0ca21350ae7f36427f0a23d516e15e4c33b88f9b76e44fcdb2?responseContentDisposition=attachment%3B%20filename%3Dip_adapter_image_encoder_pytorch_model.bin',
                },
                {
                  name: 'ip-adapter_sdxl_vit-h.bin',
                  targetInstallPath: 'ComfyUI/custom_nodes/ComfyUI_IPAdapter_plus/models',
                  source: 'https://huggingface.co/h94/IP-Adapter/tree/main',
                  url: 'https://bj.bcebos.com/v1/ai-studio-online/netdisk/1a21468dcbb742f5afda02f6130760a5fa626ee2009640ee9baf8892c7924d33?responseContentDisposition=attachment%3B%20filename%3Dip-adapter_sdxl_vit-h.bin',
                },
                {
                  name: 'ip-adapter_sd15.pth',
                  targetInstallPath: 'ComfyUI/custom_nodes/ComfyUI_IPAdapter_plus/models',
                  source: 'https://huggingface.co/h94/IP-Adapter/tree/main',
                  url: 'https://bj.bcebos.com/v1/ai-studio-online/netdisk/ab14b3e8e025404489972c9c74cfdaed26dcb7e138924be0acc99957918521af?responseContentDisposition=attachment%3B%20filename%3Dip-adapter_sd15.pth',
                },
                {
                  name: 'ip-adapter_sd15_plus.pth',
                  targetInstallPath: 'ComfyUI/custom_nodes/ComfyUI_IPAdapter_plus/models',
                  source: 'https://huggingface.co/h94/IP-Adapter/tree/main',
                  url: 'https://bj.bcebos.com/v1/ai-studio-online/netdisk/81884dea5041412b84f55ca1695e93e74ed36a2956e94c9d88c19e4323cec89e?responseContentDisposition=attachment%3B%20filename%3Dip-adapter_sd15_plus.pth',
                },
                {
                  name: 'ip-adapter_sd15_light.bin',
                  targetInstallPath: 'ComfyUI/custom_nodes/ComfyUI_IPAdapter_plus/models',
                  source: 'https://huggingface.co/h94/IP-Adapter/tree/main',
                  url: 'https://bj.bcebos.com/v1/ai-studio-online/netdisk/d7865ab0482d450cbacdb85c4edbb17ed366392a85c144b4aec2b952273d6e59?responseContentDisposition=attachment%3B%20filename%3Dip-adapter_sd15_light.bin',
                },
                {
                  name: 'ip-adapter_sdxl_vit-h.safetensors',
                  targetInstallPath: 'ComfyUI/custom_nodes/ComfyUI_IPAdapter_plus/models',
                  source: 'https://huggingface.co/h94/IP-Adapter/tree/main',
                  url: 'https://modelscope.cn/api/v1/models/zhuzhukeji/annotators/repo?Revision=master&FilePath=ip-adapter_sdxl_vit-h.safetensors',
                },
              ],
            },
            {
              name: 'ComfyUI-VideoHelperSuite',
              github: 'https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git',
              git_cn: 'https://e.coding.net/g-xeps0419/doraemon/ComfyUI-VideoHelperSuite.git',
              linkList: [
                {
                  name: 'Github',
                  link: 'https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git',
                },
                {
                  name: '国内镜像',
                  link: 'https://g-xeps0419.coding.net/public/doraemon/ComfyUI-VideoHelperSuite/git/files',
                },
              ],
              modelList: [],
            },
            {
              name: 'comfyui_controlnet_aux',
              github: 'https://github.com/Fannovel16/comfyui_controlnet_aux.git',
              git_cn: 'https://e.coding.net/g-xeps0419/doraemon/comfyui_controlnet_aux.git',
              linkList: [
                {
                  name: 'Github',
                  link: 'https://github.com/Fannovel16/comfyui_controlnet_aux.git',
                },
                {
                  name: '国内镜像',
                  link: 'https://g-xeps0419.coding.net/public/doraemon/comfyui_controlnet_aux/git/files',
                },
              ],
              modelList: [],
            },
            {
              name: 'ComfyUI-Advanced-ControlNet',
              github: 'https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git',
              git_cn: 'https://e.coding.net/g-xeps0419/doraemon/ComfyUI-Advanced-ControlNet.git',
              linkList: [
                {
                  name: 'Github',
                  link: 'https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git',
                },
                {
                  name: '国内镜像',
                  link: 'https://g-xeps0419.coding.net/public/doraemon/ComfyUI-Advanced-ControlNet/git/files',
                },
              ],
              modelList: [],
            },
            {
              name: 'ComfyUI-Frame-Interpolation',
              github: 'https://github.com/Fannovel16/ComfyUI-Frame-Interpolation.git',
              git_cn: 'https://e.coding.net/g-xeps0419/doraemon/ComfyUI-Frame-Interpolation.git',
              linkList: [
                {
                  name: 'Github',
                  link: 'https://github.com/Fannovel16/ComfyUI-Frame-Interpolation.git',
                },
                {
                  name: '国内镜像',
                  link: 'https://g-xeps0419.coding.net/public/doraemon/ComfyUI-Frame-Interpolation/git/files',
                },
              ],
              modelList: [],
            },
            {
              name: 'comfyui-mixlab-nodes',
              github: 'https://github.com/shadowcz007/comfyui-mixlab-nodes.git',
              git_cn: 'https://e.coding.net/g-xeps0419/doraemon/comfyui-mixlab-nodes.git',
              linkList: [
                {
                  name: 'Github',
                  link: 'https://github.com/shadowcz007/comfyui-mixlab-nodes.git',
                },
                {
                  name: '国内镜像',
                  link: 'https://g-xeps0419.coding.net/public/doraemon/comfyui-mixlab-nodes/git/files',
                },
              ],
              modelList: [],
            },
            {
              name: 'ComfyUI_tinyterraNodes',
              github: 'https://github.com/TinyTerra/ComfyUI_tinyterraNodes.git',
              git_cn: 'https://e.coding.net/g-xeps0419/doraemon/ComfyUI_tinyterraNodes.git',
              git_cn_preview: 'https://g-xeps0419.coding.net/public/doraemon/ComfyUI_tinyterraNodes/git/files',
              linkList: [
                {
                  name: 'Github',
                  link: 'https://github.com/TinyTerra/ComfyUI_tinyterraNodes.git',
                },
                {
                  name: '国内镜像',
                  link: 'https://g-xeps0419.coding.net/public/doraemon/ComfyUI_tinyterraNodes/git/files',
                },
              ],
              modelList: [],
            },
            {
              name: 'ComfyUI_FizzNodes.git',
              github: 'https://github.com/FizzleDorf/ComfyUI_FizzNodes.git',
              git_cn: 'https://e.coding.net/g-xeps0419/doraemon/ComfyUI_FizzNodes.git',
              git_cn_preview: 'https://g-xeps0419.coding.net/public/doraemon/ComfyUI_FizzNodes/git/files',
              linkList: [
                {
                  name: 'Github',
                  link: 'https://github.com/FizzleDorf/ComfyUI_FizzNodes.git',
                },
                {
                  name: '国内镜像',
                  link: 'https://g-xeps0419.coding.net/public/doraemon/ComfyUI_FizzNodes/git/files',
                },
              ],
              modelList: [],
            },
          ],
        },
        {
          name: '更多项目接入中...',
          logo: 'https://avatars.githubusercontent.com/u/121283862?v=4',
          brief: '欢迎提出你的意见 && 共同进行开源建设',
          buttonText: '',
          route: '/comfyui',
          linkList: [
            {
              name: 'Github',
              link: 'https://github.com/Ewall1106/Doraemon',
            },
          ],
        },
      ],
    };

    setAppInfo(res);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comfyui" element={<ComfyUI />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}
