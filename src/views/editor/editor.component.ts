import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { editor } from 'monaco-editor';
import { EDIT_EDITOR_OPTIONS } from './editor.config';
import { HttpClient } from '@angular/common/http';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { MonacoEditorModule } from '@rickzhou/ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { renderMarkdown } from 'monaco-editor/esm/vs/base/browser/markdownRenderer';

@Component({
  selector: 'app-editor',
  standalone: true,
  providers: [NzModalService],
  imports: [NzSwitchModule, NzModalModule, NzSelectModule, MonacoEditorModule, FormsModule, NzDrawerModule, NzButtonModule],
  styles: [
    `
      ::ng-deep {
        .setting {
          .ant-switch {
            background-color: #1890ff !important;
          }
        }
        .scroll-decoration {
          box-shadow: #dddddd 0 6px 6px -6px inset;
        }
        .EDITOR_HIGHLIGHT_CLASS {
          background: yellow;
        }
      }
    `,
  ],
  templateUrl: './editor.component.html',
})
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild('md') md!: ElementRef<HTMLDivElement>;
  public readonly editorOptions = EDIT_EDITOR_OPTIONS;
  public isEdit = true;
  public theme = 'vs';
  public value!: string;
  public drawer_visible = false;
  public modal_visible = false;
  public markdown!: string;

  private editor!: editor.ICodeEditor;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/ngx-monaco-editor.md', { responseType: 'text' }).subscribe((res) => (this.value = res));
  }

  ngAfterViewInit() {
    this.md.nativeElement.addEventListener('scroll', (event) => {
      // const target: HTMLDivElement = event.target as any;
      // this.editor.setScrollPosition({ scrollTop: (target.scrollTop / (target.scrollHeight - screen.height * 0.7)) * this.editor.getContentHeight() });
    });
  }

  public openDrawer(): void {
    this.drawer_visible = true;
  }

  public closeDrawer(): void {
    this.drawer_visible = false;
  }

  public openModal(): void {
    this.modal_visible = true;
  }

  public closeModal(): void {
    this.modal_visible = false;
  }

  public init(editor: editor.ICodeEditor) {
    this.editor = editor;

    this.editor?.deltaDecorations(
      [],
      [
        {
          range: {
            startLineNumber: 28,
            startColumn: 1,
            endLineNumber: 28,
            endColumn: 1,
          },
          options: {
            blockClassName: 'EDITOR_HIGHLIGHT_CLASS',
            inlineClassName: 'EDITOR_HIGHLIGHT_CLASS',
            hoverMessage: { value: 'https://www.npmjs.com/package/@rickzhou/ngx-monaco-editor' },
            isWholeLine: true,
          },
        },
      ]
    );

    this.editor.onDidScrollChange((event) => {
      this.md.nativeElement.scrollTo({
        top: (event.scrollTop / (event.scrollHeight - screen.height * 0.7)) * this.md.nativeElement.scrollHeight,
      });
    });

    this.renderMd();
  }

  public getEditorInfo() {
    console.log('editor>>>', this.editor);
    console.log('model>>>', this.editor.getModel());
  }

  public setOptions() {
    this.editor.updateOptions({
      // @ts-ignore
      theme: this.theme,
      readOnly: !this.isEdit,
    });
  }

  public renderMd() {
    this.markdown = renderMarkdown({ value: this.editor.getValue() }).element.innerHTML;
  }
}
