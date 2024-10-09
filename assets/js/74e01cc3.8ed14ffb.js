"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1760],{75450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var s=t(85893),i=t(11151);const l={sidebar_label:"client",title:"oai.client"},o=void 0,r={id:"reference/oai/client",title:"oai.client",description:"ModelClient",source:"@site/docs/reference/oai/client.md",sourceDirName:"reference/oai",slug:"/reference/oai/client",permalink:"/autogen/docs/reference/oai/client",draft:!1,unlisted:!1,editUrl:"https://github.com/autogen-ai/autogen/edit/main/website/docs/reference/oai/client.md",tags:[],version:"current",frontMatter:{sidebar_label:"client",title:"oai.client"},sidebar:"referenceSideBar",previous:{title:"cerebras",permalink:"/autogen/docs/reference/oai/cerebras"},next:{title:"client_utils",permalink:"/autogen/docs/reference/oai/client_utils"}},c={},a=[{value:"ModelClient",id:"modelclient",level:2},{value:"message_retrieval",id:"message_retrieval",level:3},{value:"get_usage",id:"get_usage",level:3},{value:"OpenAIClient",id:"openaiclient",level:2},{value:"message_retrieval",id:"message_retrieval-1",level:3},{value:"create",id:"create",level:3},{value:"cost",id:"cost",level:3},{value:"OpenAIWrapper",id:"openaiwrapper",level:2},{value:"__init__",id:"__init__",level:3},{value:"register_model_client",id:"register_model_client",level:3},{value:"create",id:"create-1",level:3},{value:"print_usage_summary",id:"print_usage_summary",level:3},{value:"clear_usage_summary",id:"clear_usage_summary",level:3},{value:"extract_text_or_completion_object",id:"extract_text_or_completion_object",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"modelclient",children:"ModelClient"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class ModelClient(Protocol)\n"})}),"\n",(0,s.jsx)(n.p,{children:"A client class must implement the following methods:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"create must return a response object that implements the ModelClientResponseProtocol"}),"\n",(0,s.jsx)(n.li,{children:"cost must return the cost of the response"}),"\n",(0,s.jsx)(n.li,{children:"get_usage must return a dict with the following keys:"}),"\n",(0,s.jsx)(n.li,{children:"prompt_tokens"}),"\n",(0,s.jsx)(n.li,{children:"completion_tokens"}),"\n",(0,s.jsx)(n.li,{children:"total_tokens"}),"\n",(0,s.jsx)(n.li,{children:"cost"}),"\n",(0,s.jsx)(n.li,{children:"model"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This class is used to create a client that can be used by OpenAIWrapper.\nThe response returned from create must adhere to the ModelClientResponseProtocol but can be extended however needed.\nThe message_retrieval method must be implemented to return a list of str or a list of messages from the response."}),"\n",(0,s.jsx)(n.h3,{id:"message_retrieval",children:"message_retrieval"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def message_retrieval(\n    response: ModelClientResponseProtocol\n) -> Union[List[str],\n           List[ModelClient.ModelClientResponseProtocol.Choice.Message]]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Retrieve and return a list of strings or a list of Choice.Message from the response."}),"\n",(0,s.jsx)(n.p,{children:"NOTE: if a list of Choice.Message is returned, it currently needs to contain the fields of OpenAI's ChatCompletion Message object,\nsince that is expected for function or tool calling in the rest of the codebase at the moment, unless a custom agent is being used."}),"\n",(0,s.jsx)(n.h3,{id:"get_usage",children:"get_usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@staticmethod\ndef get_usage(response: ModelClientResponseProtocol) -> Dict\n"})}),"\n",(0,s.jsx)(n.p,{children:"Return usage summary of the response using RESPONSE_USAGE_KEYS."}),"\n",(0,s.jsx)(n.h2,{id:"openaiclient",children:"OpenAIClient"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class OpenAIClient()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Follows the Client protocol and wraps the OpenAI client."}),"\n",(0,s.jsx)(n.h3,{id:"message_retrieval-1",children:"message_retrieval"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def message_retrieval(\n    response: Union[ChatCompletion, Completion]\n) -> Union[List[str], List[ChatCompletionMessage]]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Retrieve the messages from the response."}),"\n",(0,s.jsx)(n.h3,{id:"create",children:"create"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def create(params: Dict[str, Any]) -> ChatCompletion\n"})}),"\n",(0,s.jsx)(n.p,{children:"Create a completion for a given config using openai's client."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client"})," - The openai client."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"params"})," - The params for the completion."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"The completion."}),"\n",(0,s.jsx)(n.h3,{id:"cost",children:"cost"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def cost(response: Union[ChatCompletion, Completion]) -> float\n"})}),"\n",(0,s.jsx)(n.p,{children:"Calculate the cost of the response."}),"\n",(0,s.jsx)(n.h2,{id:"openaiwrapper",children:"OpenAIWrapper"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class OpenAIWrapper()\n"})}),"\n",(0,s.jsx)(n.p,{children:"A wrapper class for openai client."}),"\n",(0,s.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def __init__(*,\n             config_list: Optional[List[Dict[str, Any]]] = None,\n             **base_config: Any)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config_list"})," - a list of config dicts to override the base_config.\nThey can contain additional kwargs as allowed in the ",(0,s.jsx)(n.a,{href:"/docs/reference/oai/client#create",children:"create"})," method. E.g.,"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'config_list=[\n    {\n        "model": "gpt-4",\n        "api_key": os.environ.get("AZURE_OPENAI_API_KEY"),\n        "api_type": "azure",\n        "base_url": os.environ.get("AZURE_OPENAI_API_BASE"),\n        "api_version": "2024-02-01",\n    },\n    {\n        "model": "gpt-3.5-turbo",\n        "api_key": os.environ.get("OPENAI_API_KEY"),\n        "api_type": "openai",\n        "base_url": "https://api.openai.com/v1",\n    },\n    {\n        "model": "llama-7B",\n        "base_url": "http://127.0.0.1:8080",\n    }\n]\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"base_config"})," - base config. It can contain both keyword arguments for openai client\nand additional kwargs.\nWhen using OpenAI or Azure OpenAI endpoints, please specify a non-empty 'model' either in ",(0,s.jsx)(n.code,{children:"base_config"})," or in each config of ",(0,s.jsx)(n.code,{children:"config_list"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"register_model_client",children:"register_model_client"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def register_model_client(model_client_cls: ModelClient, **kwargs)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Register a model client."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"model_client_cls"})," - A custom client class that follows the ModelClient interface"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"**kwargs"})," - The kwargs for the custom client class to be initialized with"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create-1",children:"create"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def create(**config: Any) -> ModelClient.ModelClientResponseProtocol\n"})}),"\n",(0,s.jsx)(n.p,{children:"Make a completion for a given config using available clients.\nBesides the kwargs allowed in openai's [or other] client, we allow the following additional kwargs.\nThe config in each client will be overridden by the config."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["context (Dict | None): The context to instantiate the prompt or messages. Default to None.\nIt needs to contain keys that are used by the prompt template or the filter function.\nE.g., ",(0,s.jsx)(n.code,{children:'prompt="Complete the following sentence: {prefix}, context={"prefix": "Today I feel"}'}),'.\nThe actual prompt will be:\n"Complete the following sentence: Today I feel".\nMore examples can be found at ',(0,s.jsx)(n.a,{href:"/docs/Use-Cases/enhanced_inference#templating",children:"templating"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"cache (AbstractCache | None): A Cache object to use for response cache. Default to None.\nNote that the cache argument overrides the legacy cache_seed argument: if this argument is provided,\nthen the cache_seed argument is ignored. If this argument is not provided or None,\nthen the cache_seed argument is used."}),"\n",(0,s.jsx)(n.li,{children:"agent (AbstractAgent | None): The object responsible for creating a completion if an agent."}),"\n",(0,s.jsx)(n.li,{children:'(Legacy) cache_seed (int | None) for using the DiskCache. Default to 41.\nAn integer cache_seed is useful when implementing "controlled randomness" for the completion.\nNone for no caching.'}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Note"})," - this is a legacy argument. It is only used when the cache argument is not provided.\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"filter_func (Callable | None): A function that takes in the context and the response\nand returns a boolean to indicate whether the response is valid. E.g.,"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def yes_or_no_filter(context, response):\n    return context.get("yes_or_no_choice", False) is False or any(\n        text in ["Yes.", "No."] for text in client.extract_text_or_completion_object(response)\n    )\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"allow_format_str_template (bool | None): Whether to allow format string template in the config. Default to false."}),"\n",(0,s.jsx)(n.li,{children:'api_version (str | None): The api version. Default to None. E.g., "2024-02-01".'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"RuntimeError: If all declared custom model clients are not registered"}),"\n",(0,s.jsx)(n.li,{children:"APIError: If any model client create call raises an APIError"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"print_usage_summary",children:"print_usage_summary"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def print_usage_summary(\n        mode: Union[str, List[str]] = ["actual", "total"]) -> None\n'})}),"\n",(0,s.jsx)(n.p,{children:"Print the usage summary."}),"\n",(0,s.jsx)(n.h3,{id:"clear_usage_summary",children:"clear_usage_summary"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def clear_usage_summary() -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Clear the usage summary."}),"\n",(0,s.jsx)(n.h3,{id:"extract_text_or_completion_object",children:"extract_text_or_completion_object"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef extract_text_or_completion_object(\n    cls, response: ModelClient.ModelClientResponseProtocol\n) -> Union[List[str],\n           List[ModelClient.ModelClientResponseProtocol.Choice.Message]]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Extract the text or ChatCompletion objects from a completion or chat response."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"response"})," ",(0,s.jsx)(n.em,{children:"ChatCompletion | Completion"})," - The response from openai."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"A list of text, or a list of ChatCompletion objects if function_call/tool_calls are present."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const i={},l=s.createContext(i);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);