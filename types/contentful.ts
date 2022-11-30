export type CfSys = {
  id: string
  locale?: string
  contentType: {
    sys: {
      id: string
    }
  }
}

export type CfCtaProp = {
  sys: CfSys
  fields: {
    name: string
    text: string
    value: string
  }
}

export type CfNumberProp = {
  sys: CfSys
  fields: {
    name: string
    value: number
  }
}

export type CfTextProp = {
  sys: CfSys
  fields: {
    name: string
    value: string
  }
}

export type CfMarkdownProp = CfTextProp

export type CfComponentProp = {
  sys: CfSys
  fields: {
    name: string
    value: CfComponent[]
  }
}

export type CfMediaProp = {
  sys: CfSys
  fields: {
    name: string
    value: CfMedia
  }
}

export type CfMedia = {
  sys: CfSys
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    }
  }
}

export type CfComponent = {
  sys: CfSys
  fields: {
    name: string
    contentType: string
    props?: (CfNumberProp | CfTextProp | CfMarkdownProp | CfCtaProp | CfMediaProp | CfComponentProp)[]
  }
}

export type CfSection = {
  sys: CfSys
  fields: {
    components: CfComponent[]
    name: string
  }
}

export type CfPage = {
  fields: {
    name: string
    url: string
    sections?: CfSection[]
    // seo: CfSEO
  }
}

export type CfMenu = {
  fields: {
    alias?: string;
    name: string;
    page?: CfPage;
    submenu?: CfMenu[];
    url?: string;
  };
}

export type CfHeader = {
  fields: {
    name: string
    menu: CfMenu
    socialMedia: CfComponent
  }
  sys: CfSys
}

export type CfSite = {
  fields: {
    name: string;
    id: number;
    menu: CfMenu;
    header: CfHeader;
    pages: CfPage[]
  };
}

export type CfSEO = {
  fields: {
    name: string
    title: string
  }
  sys: CfSys
}