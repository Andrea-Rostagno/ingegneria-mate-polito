---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["two-way ANOVA", "analisi della varianza a due vie", "piano fattoriale completo", "full factorial design", "interaction plot", "grafico delle interazioni", "ANOVA a due fattori", "SS_A, SS_G, SS_AG"]
tags: [competenza, area/statistica]
---

# ANOVA a due vie

> Modello per una risposta che dipende da due fattori incrociati, con effetti principali e interazione; in un piano bilanciato la variabilità totale si scompone in quattro somme di quadrati indipendenti, ciascuna con il suo test $F$.

## Definizione / enunciato
Piano fattoriale completo bilanciato (libro, cap. 13, Def. 13.7):
$$Y_{ijk}=\nu+\alpha_i+\gamma_j+(\alpha\gamma)_{ij}+\epsilon_{ijk},\quad i=1..I,\ j=1..J,\ k=1..K,\quad\epsilon_{ijk}\overset{iid}\sim N(0,\sigma^2),$$
fattori A e G, $n=IJK$. **Scomposizione** (Teorema 13.8):
$$\sum_{i,j,k}(Y_{ijk}-\bar Y_{\cdot\cdot\cdot})^2=\mathrm{SS}_A+\mathrm{SS}_G+\mathrm{SS}_{AG}+\mathrm{RSS},$$
$\mathrm{SS}_A=JK\sum_i(\bar Y_{i\cdot\cdot}-\bar Y_{\cdot\cdot\cdot})^2$, $\mathrm{SS}_G=IK\sum_j(\bar Y_{\cdot j\cdot}-\bar Y_{\cdot\cdot\cdot})^2$, $\mathrm{SS}_{AG}=K\sum_{i,j}(\bar Y_{ij\cdot}-\bar Y_{i\cdot\cdot}-\bar Y_{\cdot j\cdot}+\bar Y_{\cdot\cdot\cdot})^2$, $\mathrm{RSS}=\sum(Y_{ijk}-\bar Y_{ij\cdot})^2$.

## Formule chiave
$\mathrm{RSS}/\sigma^2\sim\chi^2(IJ(K-1))$, le quattro somme sono indipendenti e, sotto le rispettive nulle, $F_A=\mathrm{MS}_A/\mathrm{RMS}\sim F(I-1,IJ(K-1))$, $F_G\sim F(J-1,IJ(K-1))$, $F_{AG}\sim F((I-1)(J-1),IJ(K-1))$, dove ogni MS è la SS divisa per i suoi gradi di libertà e $\mathrm{RMS}=S^2$.

## Intuizione
L'interazione misura quanto le medie di cella si discostano dall'additività "riga + colonna": nell'interaction plot i profili non sono paralleli. Con il bilanciamento i sottospazi degli effetti sono ortogonali e le somme dei quadrati non dipendono dall'ordine dei termini.

## Come si usa
Palle da golf (libro, Es. `c13-golf-fattoriale`): mazza ($I=2$: DRIVER, IRON) × tipo ($J=4$), $K=4$ repliche. Tabella: mazza $F=936.75$, tipo $F=7.79$ (p 0.00084), interazione $F=7.45$ (p 0.00108), residui 24 g.d.l. con $\mathrm{MS}=34.26$. Si guarda prima l'interazione: se significativa, gli effetti principali vanno letti livello per livello. Con `lm` e interazione il coefficiente principale di un fattore è l'effetto al livello di riferimento dell'altro.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 13, §13.3 (Def. 13.7, Teorema 13.8, p. 219). Fonti: `Libri/Modelli statistici/capitoli/cap13.tex`; `magistrale/Modelli statistici/251203 Tabelle AVOVA.pdf`; `magistrale/Modelli statistici/251204-Piani-Fattoriali.pdf`.

## Prerequisiti
- [[Analisi della varianza]]: caso a una via e codifica dei fattori
- [[Effetto di interazione]]: interpretazione del termine $(\alpha\gamma)_{ij}$
- [[Teorema di Cochran]]: somme dei quadrati indipendenti

## Porta a
- [[Piano a blocchi randomizzati]]: modello additivo con un'osservazione per cella

## Collegati
- [[Confronto di modelli annidati]]: il test dell'interazione come confronto additivo contro completo
- [[Test F nel modello lineare]]: ogni riga della tabella è un test $F$
- [[Modello log-lineare]]: stessa struttura di effetti principali e interazioni sui logaritmi delle medie
