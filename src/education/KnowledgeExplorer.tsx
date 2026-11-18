import React, { useState } from "react";
import { useEducationAI } from "@/hooks/use-education-ai";

// 知识探索学习组件
export const KnowledgeExplorer: React.FC<{
  educationLevel: string;
  mode: "義教" | "高教";
}> = ({ educationLevel, mode }) => {
  const [selectedSubject, setSelectedSubject] = useState("数学");
  const [activeTab, setActiveTab] = useState("notes");

  // 学科分类配置
  const subjects = {
    義教: {
      小学: ["语文", "数学", "英语", "科学", "美术", "音乐", "体育"],
      初中: [
        "语文",
        "数学",
        "英语",
        "物理",
        "化学",
        "生物",
        "历史",
        "地理",
        "政治",
        "信息技术",
      ],
    },
    高教: {
      高中: [
        "数学",
        "物理",
        "化学",
        "生物",
        "语文",
        "英语",
        "历史",
        "地理",
        "政治",
        "信息技术",
      ],
      大学: [
        "计算机科学",
        "数据科学",
        "人工智能",
        "软件工程",
        "网络工程",
        "信息安全",
        "数字媒体",
      ],
    },
  };

  const currentSubjects =
    mode === "義教"
      ? subjects[mode][educationLevel as keyof (typeof subjects)["義教"]]
      : subjects[mode][educationLevel as keyof (typeof subjects)["高教"]];

  // 知识点生成器
  const generateKnowledgePoints = (subject: string) => {
    const knowledgeMap = {
      数学: ["函数概念", "几何图形", "代数运算", "统计分析", "概率计算"],
      物理: ["力学原理", "电磁现象", "光学实验", "热力学定律", "量子理论"],
      化学: ["原子结构", "化学反应", "元素周期表", "有机化合物", "实验操作"],
      计算机科学: [
        "算法设计",
        "数据结构",
        "编程语言",
        "系统架构",
        "数据库设计",
      ],
      人工智能: [
        "机器学习",
        "神经网络",
        "自然语言处理",
        "计算机视觉",
        "强化学习",
      ],
    };
    return (
      knowledgeMap[subject] || [
        "基础概念",
        "核心原理",
        "实践应用",
        "综合分析",
        "创新思维",
      ]
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
      <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
        📚 知识探索学习中心
      </h3>

      {/* 学科选择 */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-gray-700">选择学科：</h4>
        <div className="flex flex-wrap gap-2">
          {currentSubjects?.map((subject, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedSubject === subject
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
              }`}
              onClick={() => setSelectedSubject(subject)}
            >
              📖 {subject}
            </button>
          ))}
        </div>
        <div className="mt-3 text-xs text-gray-600">
          推荐知识点：
          {generateKnowledgePoints(selectedSubject).slice(0, 3).join("、")}
        </div>
      </div>

      {/* 功能选项卡 */}
      <div className="mb-4">
        <div className="flex border-b border-gray-200">
          {[
            { id: "notes", label: "📝 学习笔记", icon: "📝" },
            { id: "mindmap", label: "🧠 思维脑图", icon: "🧠" },
            { id: "ppt", label: "📊 PPT制作", icon: "📊" },
            { id: "template", label: "📋 模板库", icon: "📋" },
            { id: "path", label: "🧭 学习路径", icon: "🧭" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 内容区域 */}
      <div className="min-h-[300px]">
        {activeTab === "notes" && (
          <NotesGenerator subject={selectedSubject} level={educationLevel} />
        )}
        {activeTab === "mindmap" && (
          <MindMapBuilder subject={selectedSubject} level={educationLevel} />
        )}
        {activeTab === "ppt" && (
          <PPTMaker subject={selectedSubject} level={educationLevel} />
        )}
        {activeTab === "template" && (
          <TemplateLibrary subject={selectedSubject} level={educationLevel} />
        )}
      </div>
    </div>
  );
};

// 学习笔记生成器
const NotesGenerator: React.FC<{ subject: string; level: string }> = ({
  subject,
  level,
}) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [savedNotes, setSavedNotes] = useState<
    {
      id: number;
      title: string;
      content: string;
      subject: string;
      date: string;
    }[]
  >([]);

  const generateNoteTemplate = () => {
    const template = `# ${subject} 学习笔记

## 🎯 学习目标
- 理解核心概念
- 掌握基本原理
- 能够实际应用

## 📖 知识点梳理
1. **基础概念**
   - 定义与特性
   - 重要性分析

2. **核心原理** 
   - 原理解释
   - 公式推导

3. **实践应用**
   - 典型例题
   - 解题思路

## 🤔 思考与总结
- 重难点分析
- 学习心得
- 待解决问题

## 📚 扩展阅读
- 相关资料链接
- 进阶学习建议`;

    setNoteContent(template);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* 笔记编辑区 */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h5 className="font-semibold">
            ✍️ 创建笔记{" "}
            <span className="ml-2 text-sm text-gray-500">学段：{level}</span>
          </h5>
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            onClick={generateNoteTemplate}
          >
            📋 生成模板
          </button>
        </div>
        <input
          type="text"
          placeholder="输入笔记标题..."
          className="w-full border rounded px-3 py-2 mb-3"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <textarea
          placeholder="开始记录你的学习心得..."
          className="w-full border rounded px-3 py-2 h-64 resize-none"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
        />
        <div className="mt-3 flex gap-2">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => {
              if (noteTitle && noteContent) {
                setSavedNotes([
                  ...savedNotes,
                  {
                    id: Date.now(),
                    title: noteTitle,
                    content: noteContent,
                    subject,
                    date: new Date().toLocaleDateString(),
                  },
                ]);
                setNoteTitle("");
                setNoteContent("");
              }
            }}
          >
            💾 保存笔记
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            🔗 分享笔记
          </button>
        </div>
      </div>

      {/* 已保存笔记 */}
      <div>
        <h5 className="font-semibold mb-3">📚 我的笔记库</h5>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {savedNotes.length === 0 ? (
            <div className="text-gray-400 text-center py-8">
              还没有笔记，开始创建你的第一篇笔记吧！
            </div>
          ) : (
            savedNotes.map((note) => (
              <div
                key={note.id}
                className="border rounded-lg p-3 hover:bg-gray-50"
              >
                <div className="flex justify-between items-start mb-2">
                  <h6 className="font-medium text-gray-800">{note.title}</h6>
                  <span className="text-xs text-gray-500">{note.date}</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {note.content.substring(0, 100)}...
                </p>
                <div className="mt-2 flex gap-2">
                  <button className="text-xs text-blue-600 hover:underline">
                    编辑
                  </button>
                  <button className="text-xs text-red-600 hover:underline">
                    删除
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// 思维脑图构建器
const MindMapBuilder: React.FC<{ subject: string; level: string }> = ({
  subject,
  level,
}) => {
  const [mindMapNodes, setMindMapNodes] = useState([
    { id: 1, text: subject, x: 300, y: 200, isRoot: true, children: [] },
  ]);

  const addNode = (parentId: number, text: string) => {
    const newNode = {
      id: Date.now(),
      text,
      x: Math.random() * 400 + 100,
      y: Math.random() * 300 + 100,
      isRoot: false,
      children: [],
    };
    setMindMapNodes([...mindMapNodes, newNode]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-semibold">
          🧠 思维脑图构建器{" "}
          <span className="ml-2 text-sm text-gray-500">学段：{level}</span>
        </h5>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 bg-green-600 text-white rounded text-sm"
            onClick={() => addNode(mindMapNodes[0]?.id || 1, "新节点")}
          >
            + 添加节点
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
            💾 保存脑图
          </button>
          <button className="px-3 py-1 bg紫-600 text-white rounded text-sm">
            📤 导出图片
          </button>
        </div>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg h-96 relative overflow-hidden bg-gray-50">
        {/* 脑图画布 */}
        <div className="absolute inset-0 p-4">
          {mindMapNodes.map((node) => (
            <div
              key={node.id}
              className={`absolute px-3 py-2 rounded-lg shadow-md cursor-move ${
                node.isRoot
                  ? "bg-blue-600 text-white font-bold"
                  : "bg-white border"
              }`}
              style={{ left: node.x, top: node.y }}
            >
              {node.text}
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-4 text-sm text-gray-500">
          💡 提示：拖拽节点可以调整位置，双击添加子节点
        </div>
      </div>

      {/* 预设脑图模板 */}
      <div className="mt-4">
        <h6 className="font-medium mb-2">📋 快速模板：</h6>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
            🎯 问题分析型
          </button>
          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
            🔄 流程梳理型
          </button>
          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
            📊 知识结构型
          </button>
        </div>
      </div>
    </div>
  );
};

// PPT制作器
const PPTMaker: React.FC<{ subject: string; level: string }> = ({
  subject,
  level,
}) => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      title: `${subject}学习汇报`,
      content: "点击编辑内容...",
      template: "title",
    },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const addSlide = (template: string) => {
    const newSlide = {
      id: Date.now(),
      title: "新幻灯片",
      content: "添加你的内容...",
      template,
    };
    setSlides([...slides, newSlide]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* 幻灯片列表 */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h5 className="font-semibold">📋 幻灯片</h5>
          <button
            className="px-2 py-1 bg-blue-600 text-white rounded text-xs"
            onClick={() => addSlide("content")}
          >
            + 新建
          </button>
        </div>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`border rounded p-2 cursor-pointer transition-colors ${
                currentSlide === idx
                  ? "border-blue-500 bg-blue-50"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => setCurrentSlide(idx)}
            >
              <div className="text-sm font-medium truncate">{slide.title}</div>
              <div className="text-xs text-gray-500">第 {idx + 1} 页</div>
            </div>
          ))}
        </div>
      </div>

      {/* 编辑区域 */}
      <div className="lg:col-span-2">
        <div className="flex justify-between items-center mb-3">
          <h5 className="font-semibold">
            ✏️ 编辑幻灯片{" "}
            <span className="ml-2 text-sm text-gray-500">学段：{level}</span>
          </h5>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-green-600 text-white rounded text-sm">
              🎨 更换主题
            </button>
            <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm">
              🔍 预览
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
              💾 保存PPT
            </button>
          </div>
        </div>

        {/* 当前幻灯片编辑 */}
        <div className="border rounded-lg p-4 bg-white shadow-sm min-h-80">
          <input
            type="text"
            className="w-full text-xl font-bold border-none outline-none mb-4"
            value={slides[currentSlide]?.title || ""}
            onChange={(e) => {
              const newSlides = [...slides];
              if (newSlides[currentSlide]) {
                newSlides[currentSlide].title = e.target.value;
                setSlides(newSlides);
              }
            }}
            placeholder="输入标题..."
          />
          <textarea
            className="w-full border rounded px-3 py-2 h-48 resize-none"
            value={slides[currentSlide]?.content || ""}
            onChange={(e) => {
              const newSlides = [...slides];
              if (newSlides[currentSlide]) {
                newSlides[currentSlide].content = e.target.value;
                setSlides(newSlides);
              }
            }}
            placeholder="输入内容..."
          />
        </div>

        {/* 模板选择 */}
        <div className="mt-4">
          <h6 className="font-medium mb-2">🎨 幻灯片模板：</h6>
          <div className="grid grid-cols-4 gap-2">
            {[
              { name: "标题页", type: "title", bg: "bg-blue-100" },
              { name: "内容页", type: "content", bg: "bg-green-100" },
              { name: "图表页", type: "chart", bg: "bg-purple-100" },
              { name: "总结页", type: "summary", bg: "bg-orange-100" },
            ].map((template) => (
              <button
                key={template.type}
                className={`p-3 rounded text-xs font-medium hover:shadow-md transition-shadow ${template.bg}`}
                onClick={() => addSlide(template.type)}
              >
                {template.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// 模板库
const TemplateLibrary: React.FC<{ subject: string; level: string }> = ({
  subject,
  level,
}) => {
  const templates = [
    {
      id: 1,
      name: "学习计划模板",
      type: "plan",
      icon: "📅",
      desc: "制定学习目标和时间安排",
    },
    {
      id: 2,
      name: "知识总结模板",
      type: "summary",
      icon: "📋",
      desc: "系统梳理所学知识点",
    },
    {
      id: 3,
      name: "实验报告模板",
      type: "report",
      icon: "🔬",
      desc: "记录实验过程和结果",
    },
    {
      id: 4,
      name: "项目展示模板",
      type: "project",
      icon: "🎯",
      desc: "展示项目成果和心得",
    },
    {
      id: 5,
      name: "错题整理模板",
      type: "mistakes",
      icon: "📝",
      desc: "分析错题原因和解决方案",
    },
    {
      id: 6,
      name: "读书笔记模板",
      type: "reading",
      icon: "📚",
      desc: "记录阅读心得和感悟",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-semibold">
          📋 教育模板库{" "}
          <span className="ml-2 text-sm text-gray-500">
            学科：{subject} · 学段：{level}
          </span>
        </h5>
        <button className="px-3 py-1 bg-blue-600 text白 rounded text-sm">
          + 自定义模板
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="text-2xl mb-2">{template.icon}</div>
            <h6 className="font-medium text-gray-800 mb-1">{template.name}</h6>
            <p className="text-sm text-gray-600 mb-3">{template.desc}</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">
                使用模板
              </button>
              <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200">
                预览
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h6 className="font-medium text-blue-800 mb-2">💡 模板使用技巧</h6>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• 根据学习目标选择合适的模板</li>
          <li>• 可以组合使用多个模板</li>
          <li>• 保存常用的自定义模板</li>
          <li>• 定期回顾和更新模板内容</li>
        </ul>
      </div>
    </div>
  );
};

// 学习路径
export const LearningPathPanel: React.FC<{
  subject: string;
  level: string;
}> = ({ subject, level }) => {
  const { generateLearningPath, isLoading } = useEducationAI();
  const [result, setResult] = useState<{
    path: Array<{ title: string; description: string; resources?: string[] }>;
    recommendations?: string[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setError(null);
    try {
      const data = await generateLearningPath({ subject, level });
      setResult(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "生成失败");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="font-semibold">🧭 学习路径生成</h5>
          <p className="text-xs text-gray-500">
            学科：{subject} ｜ 学段：{level}
          </p>
        </div>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleGenerate}
          disabled={isLoading}
        >
          {isLoading ? "生成中..." : "生成学习路径"}
        </button>
      </div>

      {error && <div className="text-red-600 text-sm">{error}</div>}

      {!result ? (
        <div className="text-gray-400 text-center py-8">
          点击“生成学习路径”获取个性化学习建议
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h6 className="font-medium">📌 路径节点</h6>
            {result.path?.map((step, idx) => (
              <div key={idx} className="border rounded-lg p-3">
                <div className="font-semibold">
                  {idx + 1}. {step.title}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {step.description}
                </div>
                {step.resources && step.resources.length > 0 && (
                  <div className="mt-2 text-xs text-blue-700">
                    资源：{step.resources.join("、")}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            <h6 className="font-medium mb-2">✅ 建议</h6>
            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
              {result.recommendations?.map((rec, i) => (
                <li key={i}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
