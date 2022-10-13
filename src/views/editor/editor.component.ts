import { Component } from '@angular/core';
import { editor } from 'monaco-editor';
import { READ_EDITOR_OPTIONS } from './editor.config';
import { HttpClient } from '@angular/common/http';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { MonacoEditorModule } from '@rickzhou/ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [NzSwitchModule, NzModalModule, NzSelectModule, MonacoEditorModule, FormsModule, NzDrawerModule, NzButtonModule],
  styles: [
    `
      ::ng-deep {
        .setting {
          .ant-switch {
            background-color: #1890ff !important;
          }
        }
        .EDITOR_HIGHLIGHT_CLASS {
          background: yellow;
        }
      }
    `,
  ],
  templateUrl: './editor.component.html',
})
export class EditorComponent {
  public readonly editorOptions = READ_EDITOR_OPTIONS;
  public isEdit = false;
  public theme = 'vs';
  public value!: string;
  public drawer_visible = false;
  public modal_visible = false;

  private editor!: editor.ICodeEditor;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/ngx-monaco-editor.md', { responseType: 'text' }).subscribe((res) => (this.value = res));
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
  }

  public getEdiotrInfo() {
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
}
