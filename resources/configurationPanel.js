{
    "configurationSettings": [{
        "category": "General",
        "fields": [{
            "type": "appproxies"
        }, {
            "type": "webmap"
        }, 
        {
            "type": "conditional",
            "fieldName": "showTitle",
            "condition": false,
            "label": "Display map title",
            "items": [{
                "placeHolder": "Defaults to map title",
                "label": "Title:",
                "fieldName": "title",
                "type": "string",
                "tooltip": "Defaults to map title"
            }]
        }, {
            "type": "conditional",
            "condition": false,
            "fieldName": "showSubTitle",
            "label": "Display subtitle",
            "items": [{
                "placeHolder": "Defaults to map summary",
                "label": "Subtitle:",
                "fieldName": "subtitle",
                "type": "string",
                "tooltip": "Defaults to map summary"
            }]
        }]
    }, {
        "category": "Theme",
        "fields": [{
            "type": "subcategory",
            "label": "Colors"
        }, {
            "type": "paragraph",
            "value": "Define a custom color scheme for the application."
        }, {
            "type": "color",
            "fieldName": "background",
            "tooltip": "Choose a header background color",
            "label": "Header background color",
            "sharedThemeProperty": "header.background"
        }, {
            "type": "color",
            "fieldName": "color",
            "tooltip": "Title text color",
            "label": "Title text color",
            "sharedThemeProperty": "header.text"
        }, {
            "type": "color",
            "fieldName": "subtitleColor",
            "tooltip": "Subtitle text color",
            "label": "Subtitle text color",
            "sharedThemeProperty": "header.text"
        }, {
            "type": "color",
            "fieldName": "legendTitleBackground",
            "label": "Legend header color",
            "tooltip": "Choose a background color for the clickable legend header",
            "sharedThemeProperty": "button.background"
        }, {
            "type": "color",
            "fieldName": "legendTitleColor",
            "label": "Legend text color",
            "tooltip": "Choose a text color for the clickable legend header",
            "sharedThemeProperty": "button.text"
        }, {
            "type": "conditional",
            "condition": false,
            "fieldName": "showLogo",
            "label": "Show logo:",
            "items": [{
                "label": "Logo:",
                "fieldName": "logo",
                "placeHolder": "URL to image",
                "type": "string",
                "sharedThemeProperty": "logo.small",
                "tooltip": "Optional logo to display"
            }, {
                "label": "Logo link:",
                "fieldName": "logoLink",
                "placeHolder": "http://www.esri.com",
                "type": "string",
                "tooltip": "Url to navigate to when logo is clicked"
            }]
        }, {
            "type": "subcategory",
            "label": "Custom Layout Options"
        }, {
            "type": "string",
            "fieldName": "headerHeight",
            "placeHolder": "115",
            "label": "Header height:",
            "tooltip": "Defaults to 115 pixels - resize to fit your content."
        }, {
            "type": "paragraph",
            "value": "Use the Custom css option to paste css that overwrites rules in the app."
        }, {
            "type": "string",
            "fieldName": "customstyle",
            "tooltip": "Custom css",
            "label": "Custom css"
        }]
    }, {
        "category": "Options",
        "fields": [{
            "type": "conditional",
            "condition": false,
            "fieldName": "legend",
            "label": "Legend",
            "items": [{
                "type": "boolean",
                "fieldName": "legendOpen",
                "label": "Open legend on startup"
            }]
        }, {
            "type": "boolean",
            "fieldName": "scalebar",
            "label": "Scalebar"
        }, {
            "type": "subcategory",
            "label": "Header Links"
        }, {
            "type": "boolean",
            "fieldName": "showSocialIcons",
            "label": "Show sharing icons"
        }, {
            "type": "boolean",
            "fieldName": "showSocialText",
            "label": "Show header link"
        }, {
            "type": "string",
            "fieldName": "socialText",
            "label": "Header text:",
            "placeHolder": "A story map"
        }, {
            "type": "string",
            "fieldName": "socialLink",
            "label": "Header link:",
            "placeHolder": "http://storymaps.arcgis.com",
            "tooltip": "Url to navigate to when text is clicked"
        }]
    }, {
        "category": "Search",
        "fields": [{
            "type": "subcategory",
            "label": "Search Settings"
        }, {
            "type": "paragraph",
            "value": "Enable search to allow users to find a location or data in the map. Configure the search settings to refine the experience in your app by setting the default search resource, placeholder text, etc."
        }, {
            "type": "conditional",
            "condition": false,
            "fieldName": "search",
            "label": "Enable search tool",
            "items": [{
                "type": "search",
                "fieldName": "searchConfig",
                "label": "Configure search tool"
            }]
        }]
    }],
    "values": {
        "background": "#444",
        "color": "#fff",
        "legendTitleBackground": "#767676",
        "legendTitleColor": "#fff",
        "showSocialIcons": true,
        "showLogo": true,
        "showTitle": true,
        "showSubTitle": true,
        "showSocialText": true,
        "subtitleColor": "#CECECE",
        "legend": true,
        "legendOpen": false,
        "scalebar": true,
        "search": false
    }
}