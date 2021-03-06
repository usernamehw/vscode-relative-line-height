import vscode, { workspace } from 'vscode';

interface IConfig {
	value: number;
}
// Default line height modifier is 1.35 ?
export function activate(context: vscode.ExtensionContext): void {
	const EXTENSION_NAME = 'relativeLineHeight';
	updateConfig();

	function updateConfig(e?: vscode.ConfigurationChangeEvent): void {
		if (
			e &&
			(!e.affectsConfiguration(EXTENSION_NAME) && !e.affectsConfiguration('editor'))
		) {
			return;
		}
		const extensionConfig = workspace.getConfiguration(EXTENSION_NAME) as any as IConfig;
		const relativeLineHeight = extensionConfig.value;

		const editorConfig = workspace.getConfiguration('editor', null);
		const editorFontSize = editorConfig.get('fontSize') as number;
		const editorLineHeight = editorConfig.get('lineHeight') as number;

		const newLineHeight = Math.round(editorFontSize * relativeLineHeight);

		if (editorLineHeight === newLineHeight) {
			return;
		}

		editorConfig.update('lineHeight', newLineHeight, true);
	}

	context.subscriptions.push(workspace.onDidChangeConfiguration(updateConfig));
}

export function deactivate(): void { }
