---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["optimization under uncertainty", "ottimizzazione in condizioni di incertezza", "platonic optimization", "ottimizzazione platonica", "distributionally robust optimization", "ottimizzazione distribuzionalmente robusta", "ambiguity set", "insieme di ambiguità"]
tags: [competenza, area/ottimizzazione]
---

# Ottimizzazione sotto incertezza

> Come dare senso a un problema $\min_{\mathbf x\in S}f(\mathbf x,\boldsymbol\xi)$ quando i fattori di rischio $\boldsymbol\xi$ sono incerti: caso peggiore, valore atteso o caso peggiore sulle distribuzioni.

## Definizione / enunciato
Un modello "platonico" (es. LP $\min\mathbf c^T\mathbf x$, $A\mathbf x=\mathbf b$, $\mathbf x\ge\mathbf 0$) presuppone di avere un modello, di crederci, di saper valutare facilmente obiettivo e vincoli e di saperlo risolvere. Se il risultato dipende da fattori di rischio $\boldsymbol\xi\in\mathbb R^l$, la scrittura $\min_{\mathbf x\in S}f(\mathbf x,\boldsymbol\xi)$ **non ha senso matematico** e va riformulata:
- **robusta (worst case)**, se si sa solo che $\boldsymbol\xi\in\mathcal U$ (insieme di incertezza);
- **programmazione stocastica**, se $\tilde{\boldsymbol\xi}$ ha distribuzione nota $\mathbb P$;
- **distribuzionalmente robusta**, ibrido con un insieme di ambiguità $\mathcal A$ di misure di probabilità.

## Formule chiave
$$\min_{\mathbf x\in S}\Big[\max_{\boldsymbol\xi\in\mathcal U}f(\mathbf x,\boldsymbol\xi)\Big],\qquad \min_{\mathbf x\in S}\mathbb E_{\mathbb P}\big[f(\mathbf x,\tilde{\boldsymbol\xi})\big],\qquad \min_{\mathbf x\in S}\Big[\sup_{\mathbb P\in\mathcal A}\mathbb E_{\mathbb P}\big[f(\mathbf x,\tilde{\boldsymbol\xi})\big]\Big].$$
In generale
$$\mathbb E_{\mathbb P}\big[f(\mathbf x,\tilde{\boldsymbol\xi})\big]\ne f\big(\mathbf x,\mathbb E_{\mathbb P}[\tilde{\boldsymbol\xi}]\big),$$
quindi non basta sostituire i fattori di rischio con una previsione puntuale.

## Intuizione
Anche la previsione puntuale è un problema decisionale: minimizzando l'errore quadratico medio $\mathbb E[(Y-x)^2]=\mathbb E[Y^2]-2x\mathbb E[Y]+x^2$ si ottiene $x=\mathbb E[Y]$, con l'errore assoluto $\mathbb E|Y-x|$ la mediana, con penalità asimmetriche un quantile. Quale statistica usare dipende dalle conseguenze economiche degli errori.

## Come si usa
Si sceglie il paradigma in base all'informazione disponibile. Se manca del tutto un modello si ricorre a costruzione empirica dei modelli o a reinforcement learning senza modello; se le funzioni si valutano solo per simulazione, a ottimizzazione black-box (da non confondere con quella derivative-free), per esempio surrogata. I vincoli incerti $g(\mathbf x,\tilde{\boldsymbol\xi})\le0$ si trattano con vincoli probabilistici o in forma robusta.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): lezione introduttiva "Platonic vs. real-world optimization". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/01.V2 - Platonic.pdf` (p. 3-7, 16).

## Prerequisiti
- [[Modello di ottimizzazione]]: il modello deterministico da rendere robusto o stocastico

## Porta a
- [[Problema del newsvendor]]: primo modello statico di programmazione stocastica
- [[Programmazione stocastica a due stadi]]: forma con valore atteso e ricorso
- [[Programmazione lineare robusta]]: forma worst case su un insieme di incertezza
- [[Vincoli probabilistici]]: vincoli incerti richiesti con alta probabilità

## Collegati
- [[Disuguaglianza di Jensen condizionata]]: spiega perché $\mathbb E[f]\ne f(\mathbb E)$
- [[Ottimizzazione surrogata]]: approccio black-box quando $f$ si valuta per simulazione
