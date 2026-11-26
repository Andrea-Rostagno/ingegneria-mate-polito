---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Ricerca operativa, Matematica per l'AI, Business intelligence per big data, Data science lab]
livello: [magistrale, triennale]
aliases: ["SVM", "macchine a vettori di supporto", "margine", "kernel", "classificatore a massimo margine", "maximum margin classifier", "iperpiano di separazione dei pattern", "vettori di supporto", "support vectors", "SVM a margine rigido", "hard margin SVM", "duale della SVM", "margine geometrico"]
tags: [competenza, area/data-ml]
---

# Support vector machine

> Classificatore che separa le classi con l'iperpiano di margine massimo, eventualmente dopo aver trasformato i dati in uno spazio di dimensione più alta.

## Definizione / enunciato
Si cerca un **iperpiano lineare** (confine di decisione) che separi i dati. Gli iperpiani separatori possibili sono infiniti ($B_1$, $B_2$, …): l'SVM sceglie quello che **massimizza il margine**, cioè la distanza fra i due iperpiani paralleli ($b_{11}, b_{12}$) che toccano i punti più vicini delle due classi. Nell'esempio delle slide $B_1$ è migliore di $B_2$ perché ha margine maggiore.

**SVM non lineari**: se il confine non è lineare, i dati vengono trasformati in uno spazio di dimensione più alta dove diventano separabili linearmente.

## Formule chiave
Nelle slide l'SVM è presentata solo graficamente: nessuna formula del margine è riportata.

## Intuizione
Un margine ampio lascia spazio ai punti nuovi vicino al confine: l'iperpiano di margine massimo è il più "prudente" e generalizza meglio.

## Come si usa
Valutazione delle slide: fra i classificatori più accurati; la costruzione del modello richiede un tuning significativo dei parametri, la classificazione è molto veloce; modello e predizioni non interpretabili (scatola nera); scalabilità media in numero di record e di attributi; non incrementale; robusta a rumore e outlier.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Support Vector Machines" del mazzo di classificazione (figure da Tan, Steinbach, Kumar). Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 92-101).
- **Ricerca operativa** (triennale): formulazione come problema di ottimizzazione. Iperpiano $\pi(\mathbf x)=\beta_0+\boldsymbol\beta^T\mathbf x=0$, target $y_i\in\{-1,1\}$, separazione se $y_i(\beta_0+\beta_1x_{i1}+\dots+\beta_px_{ip})>0$; con $\|\boldsymbol\beta\|=1$ questa quantità è la distanza dall'iperpiano. Massimo margine: $\max M$ s.t. $\|\boldsymbol\beta\|^2=1$, $y_i(\beta_0+\boldsymbol\beta^T\mathbf x_i)\ge M$ (non convesso per il vincolo sulla norma); scegliendo $\|\boldsymbol\beta\|=1/M$ si ottiene il QP convesso $\min\|\boldsymbol\beta\|^2$ s.t. $y_i(\beta_0+\boldsymbol\beta^T\mathbf x_i)\ge1$. Margine morbido con variabili di scarto: $y_i(\beta_0+\boldsymbol\beta^T\mathbf x_i)\ge M(1-\epsilon_i)$, $\epsilon_i\ge0$, $\sum_i\epsilon_i=C$; $\epsilon_i>1$ = esempio nel semispazio sbagliato (al più $C$ errori), $\epsilon_i\in(0,1)$ = esempio nella "terra di nessuno". Con feature non lineari $z_k=\varphi_k(\mathbf x)$ (per esempio una feature radiale) i pattern diventano separabili nello spazio trasformato. Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 44-49).
- **Matematica per l'AI** (triennale): caso separabile secondo Mohri. Margine geometrico massimo $\rho=\max_{\mathbf w,b}\min_i\frac{y_i(\mathbf w\cdot\mathbf x_i+b)}{\|\mathbf w\|}$; normalizzando $\min_iy_i(\mathbf w\cdot\mathbf x_i+b)=1$ si ottiene il QP strettamente convesso $\min\frac12\|\mathbf w\|^2$ s.t. $y_i(\mathbf w\cdot\mathbf x_i+b)\ge1$ (soluzione unica, iperpiani marginali $\mathbf w\cdot\mathbf x+b=\pm1$). Lagrangiana $L=\frac12\|\mathbf w\|^2-\sum_i\alpha_i[y_i(\mathbf w\cdot\mathbf x_i+b)-1]$; KKT: $\mathbf w=\sum_i\alpha_iy_i\mathbf x_i$, $\sum_i\alpha_iy_i=0$, $\alpha_i=0$ oppure $y_i(\mathbf w\cdot\mathbf x_i+b)=1$: i **vettori di supporto** ($\alpha_i\neq0$) stanno sugli iperpiani marginali e determinano da soli la soluzione ($\mathbf w$ unico, i vettori di supporto no). **Duale**: $\max_\alpha\sum_i\alpha_i-\frac12\sum_{i,j}\alpha_i\alpha_jy_iy_j(\mathbf x_i\cdot\mathbf x_j)$ s.t. $\alpha_i\ge0$, $\sum_i\alpha_iy_i=0$ (QP concavo, matrice di Gram di $y_i\mathbf x_i$), dualità forte; $h(\mathbf x)=\mathrm{sgn}\big(\sum_i\alpha_iy_i(\mathbf x_i\cdot\mathbf x)+b\big)$ dipende solo da prodotti scalari. Bound VC per gli iperpiani di $\mathbb R^N$ (VC $N+1$). Laboratori di Della Santa con `LinearSVC` e `SVC` di scikit-learn (`linSVM.ipynb`, `linSVMMushrooms.ipynb`). Fonti: `triennale/ANNO 3/matematica AI/FML.pdf` §5.1-5.2, §5.4 (pp. 97-101, 108 del PDF); `CapitoliFOM.pdf`.
- **Business intelligence per big data** (magistrale): stesse slide su SVM lineari e non lineari e loro valutazione; nel mazzo di regressione la stessa idea dà la [[Support vector regression]]. Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 95-104); `magistrale/Business intelligence per big data/06-Regression-Analysis_BI_2026.pdf` (pp. 31-40).
- **Data science lab** (magistrale): presentazione grafica (iperpiano di separazione, margine, SVM non lineari tramite trasformazione in uno spazio di dimensione maggiore) e valutazione: fra i più accurati, non interpretabile, non incrementale, richiede molta taratura dei parametri, classificazione veloce, scalabile nel numero di attributi ma non nella dimensione del training, robusta a rumore e outlier. La One-Class SVM compare come metodo di frontiera nel rilevamento di anomalie (`anomaly-detection.ipynb`). Fonti: `magistrale/Data science lab/slide testo/8-DMClassification.pdf` (p. 78-87).

## Prerequisiti
- [[Classificazione supervisionata]]: un modello di classificazione

## Porta a
- Nessuno.

## Collegati
- [[Rete neurale artificiale]]: modelli accurati ma poco interpretabili
- [[Programmazione quadratica]]: il massimo margine è un QP convesso (Ricerca operativa)
- [[Teoremi di separazione]]: iperpiano che separa due insiemi (Ricerca operativa)
- [[Regressione lineare]]: stesso schema con target quantitativo (Ricerca operativa)
- [[SVM a margine morbido]]: estensione al caso non separabile (Matematica per l'AI)
- [[Kernel definito positivo]]: il duale dipende solo da prodotti scalari, sostituibili con un kernel (Matematica per l'AI)
- [[Condizioni di Karush-Kuhn-Tucker]]: le KKT caratterizzano i vettori di supporto (Matematica per l'AI)
- [[Dualità lagrangiana]]: derivazione del problema duale (Matematica per l'AI)
- [[Dimensione VC]]: gli iperpiani di $\mathbb R^N$ hanno VC $N+1$ (Matematica per l'AI)
